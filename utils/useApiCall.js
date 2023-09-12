import axios from "axios";

export const useApiCall = () => {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBaseUri;
    const auth = useAuthStore();

    const result = {
        success: false,
        message: '',
        code: 0,
        data: {},
    };

    const get = async (route) => {

        try {
            const call = await axios.get(apiBase + route, {
                headers: {
                    'Authorization': 'Bearer ' + auth.returnAccessToken,
                }
            });
            result.success = true;
            result.message = call.data.message;
            result.code = call.data.code;
            result.data = call.data.data;
            return result;

        } catch (error) {
            let code = error.response.status;
            let errorMessage = error.response.data.message;
            result.success = false;
            result.message = errorMessage;
            result.code = code;
            result.data = {};
            return result;
        }
    }

    const post = async (route, data) => {

        try {
            const call = await axios.post(apiBase + route, data, {
                headers: {
                    'Authorization': 'Bearer ' + auth.returnAccessToken,
                }
            });
            result.success = true;
            result.message = call.data.message;
            result.code = call.data.code;
            result.data = call.data.data;
            return result;

        } catch (error) {
            let code = error.response.status;
            let errorMessage = error.response.data.message;
            result.success = false;
            result.message = errorMessage;
            result.code = code;
            result.data = {};
            return result;
        }
    }

    const put = async (route, data) => {
        try {
            const call = await axios.put(apiBase + route, data, {
                headers: {
                    'Authorization': 'Bearer ' + auth.returnAccessToken,
                }
            });
            result.success = true;
            result.message = call.data.message;
            result.code = call.data.code;
            result.data = call.data.data;
            return result;

        } catch (error) {
            let code = error.response.status;
            let errorMessage = error.response.data.message;
            result.success = false;
            result.message = errorMessage;
            result.code = code;
            result.data = {};
            return result;
        }
    }

    const del = async (route) => {
        try {
            const call = await axios.delete(apiBase + route, {
                headers: {
                    'Authorization': 'Bearer ' + auth.returnAccessToken,
                }
            });
            result.success = true;
            result.message = call.data.message;
            result.code = call.data.code;
            result.data = call.data.data;
            return result;

        } catch (error) {
            let code = error.response.status;
            let errorMessage = error.response.data.message;
            result.success = false;
            result.message = errorMessage;
            result.code = code;
            result.data = {};
            return result;
        }
    }

    return { get, post, put, del };

};