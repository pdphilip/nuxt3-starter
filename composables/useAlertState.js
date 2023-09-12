import { defineStore } from 'pinia'

export const useAlertState = defineStore('Alert', {

    state: () => {
        return {
            title: '',
            message: '',
            type: '',
            show: false,
        }
    },
    getters: {},
    actions: {
        async triggerAlert(title, message, type, timeout = 5000)
        {
            await this.setAlert(title, message, type);
            await new Promise(resolve => setTimeout(resolve, timeout));
            this.reset();

        },
        async setAlert(title, message, type)
        {
            this.title = title;
            this.message = message;
            this.type = type;
            this.show = true;
            return true;
        },

        reset()
        {
            this.$reset();
        }
    },
})