export const getToken = () => {
    const token = localStorage.getItem('access_token');
    return token || null;
};

export const useAuth = () => {
    return Boolean(localStorage.getItem('access_token'));
};
