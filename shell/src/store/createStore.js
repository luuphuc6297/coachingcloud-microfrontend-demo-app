import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { userApis } from '../apis/userApis';

const createStore = () =>
    create(
        devtools(
            persist(
                (set, get) => ({
                    users: [],
                    getUsers: async () => {
                        const result = await userApis.getUsers();
                        set({ users: result });
                    },
                    clearUser: () => set(() => ({ users: [] })),
                }),
                {
                    name: 'coaching-store',
                    getStorage: () => localStorage,
                }
            )
        )
    );

export default createStore;
