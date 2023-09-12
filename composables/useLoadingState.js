import { defineStore } from 'pinia'

export const useLoadingState = defineStore('loading', {

    state: () => {
        return {
            loading: false,
        }
    },
    getters: {
        isLoading: (state) => {
            return state.loading;
        },
    },
    actions: {
        startLoading()
        {
            this.loading = true;
        },
        stopLoading()
        {
            this.loading = false;
        },
    },
})