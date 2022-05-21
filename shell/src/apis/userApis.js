import axiosClient from './axiosClient';

export const userApis = {
    getUsers(data) {
        const url = '/users';
        return axiosClient.get(url);
    },
};
