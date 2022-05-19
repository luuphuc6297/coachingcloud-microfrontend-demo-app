import axiosClient from './axiosClient';

export const userApi = {
    getUsers(data): Promise {
        const url = '/users';
        return axiosClient.get(url);
    },
};
