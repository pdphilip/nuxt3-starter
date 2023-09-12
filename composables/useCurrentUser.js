export const useCurrentUser = () => {
    const auth = useAuthStore();
    return auth.returnUser;
}