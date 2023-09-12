import { defineStore } from 'pinia'
import axios from "axios";


const baseSettings = {
    token: {},
    authStore: {
        code_challenge: '',
        code_verifier: '',
        state: '',
    },
    name: '',
    avatarUrl: '',
    loggedIn: false
}

export const useAuthStore = defineStore('auth', {

    state: () => {
        const Crypto = useCrypto()
        const base = { ...baseSettings };
        return {
            user: Crypto.encryptObject(base)
        }
    },
    getters: {
        currentState: (state) => {
            const Crypto = useCrypto()
            try {
                return {
                    user: Crypto.decryptObject(state.user)
                }

            } catch (error) {
                state.$reset();
                return {
                    user: { ...baseSettings }
                }
            }
        },
        isLoggedIn: (state) => {
            return state.currentState.user.loggedIn;
        },
        returnAccessToken: (state) => {
            const current = state.currentState;
            return current.user.token.accessToken ? current.user.token.accessToken : false;
        },
        returnUser: (state) => {
            return state.currentState.user;
        }
    },
    actions: {
        updateState(state)
        {
            const Crypto = useCrypto()
            this.user = Crypto.encryptObject(state);
        },
        async generateAuthRequestUrl()
        {
            const config = useRuntimeConfig();
            const Crypto = useCrypto();
            const pkceCodes = await Crypto.generatePKCECodes();
            const payload = {
                client_id: config.public.clientId,
                redirect_uri: config.public.redirectUri,
                response_type: 'code',
                scope: '',
                state: pkceCodes.authState,
                code_challenge: pkceCodes.challenge,
                code_challenge_method: 'S256',
            };

            let decryptedState = this.currentState.user;
            decryptedState.authStore = {
                code_challenge: pkceCodes.challenge,
                code_verifier: pkceCodes.verifier,
                state: pkceCodes.authState,
            };
            this.updateState(decryptedState);
            const searchParams = new URLSearchParams(payload);
            return config.public.authUri + '?' + searchParams.toString();


        },

        async loginWithCode(code, state)
        {
            const Alert = useAlertState();
            const config = useRuntimeConfig();

            let decryptedState = this.currentState.user;
            if (state !== decryptedState.authStore.state) {
                await Alert.triggerAlert('Error', 'Invalid state returned from auth server', 'error', 10000);
                return false;
            }
            let data = {
                grant_type: 'authorization_code',
                client_id: config.public.clientId,
                redirect_uri: config.public.redirectUri,
                code: code,
                code_verifier: decryptedState.authStore.code_verifier,
            };

            try {
                const response = await axios.post(config.public.tokenUri, data);

                this.setToken(response.data.access_token, response.data.expires_in, response.data.token_type, response.data.refresh_token);
                await this.login();
                return true;

            } catch (error) {
                let errorCode = error.response.status ? error.response.status : 500;
                let errorMessage = error.response.data.message ? error.response.data.message : 'Unknown error';
                await Alert.triggerAlert('Auth Error (' + errorCode + ')', errorMessage, 'error', 10000);
                return false;

            }

        },
        setToken(token, expiresIn, tokenType, refreshToken)
        {
            let decryptedState = this.currentState.user;
            decryptedState.token = {
                accessToken: token,
                expiresIn: expiresIn,
                tokenType: tokenType,
                refreshToken: refreshToken
            }
            this.updateState(decryptedState);
        },

        async login()
        {
            const Alert = useAlertState();
            const api = useApiCall();
            let decryptedState = this.currentState.user;
            const response = await api.get('/user');
            if (!response.success) {
                let errorCode = response.code;
                let errorMessage = response.message;
                await Alert.triggerAlert('Auth Error (' + errorCode + ')', errorMessage, 'error', 10000);
                return false;
            }
            decryptedState.authStore = {};
            decryptedState.name = response.data.first_name + ' ' + response.data.last_name;
            decryptedState.avatarUrl = response.data.avatar_url;
            decryptedState.loggedIn = true;
            this.updateState(decryptedState);

            return true;

        },
        logout()
        {
            this.$reset();
        }
    },
    persist: true,
})