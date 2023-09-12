import enc from 'crypto-js/enc-utf8';
import AES from 'crypto-js/aes';
import getPkce from 'oauth-pkce';
import { v4 as uuidv4 } from 'uuid';

export const useCrypto = () => {
    
    const sessionCookie = useCookie('session')
    if (!sessionCookie.value) {
        sessionCookie.value = uuidv4();
    }
    const secret = sessionCookie.value;

    const encryptText = (text) => {
        return AES.encrypt(text, secret).toString();
    }

    const decryptText = (ciphertext) => {
        let bytes = AES.decrypt(ciphertext, secret);
        return bytes.toString(enc);
    }

    const encryptObject = (object) => {
        return AES.encrypt(JSON.stringify(object), secret).toString();
    }

    const decryptObject = (ciphertext) => {
        let bytes = AES.decrypt(ciphertext, secret);
        return JSON.parse(bytes.toString(enc));
    }

    const generatePKCECodes = async () => {

        const authState = uuidv4();
        const { verifier, challenge } = await new Promise((resolve) => {
            getPkce(43, (error, { verifier, challenge }) => {
                if (error) throw error;
                resolve({ verifier, challenge });
            });
        });
        return {
            authState,
            verifier,
            challenge
        }

    }

    return {
        encryptText,
        decryptText,
        encryptObject,
        decryptObject,
        generatePKCECodes,
    }

}