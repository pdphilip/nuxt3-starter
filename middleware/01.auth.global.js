export default defineNuxtRouteMiddleware((to, from) => {

    if (to.path.includes('/admin')) {
        const auth = useAuthStore();

        if (!auth.isLoggedIn) {
            return navigateTo('/login')
        }
    }


})