import React from 'react';
import createContext from 'zustand/context';
import createStore from './createStore';

const { Provider, useStore } = createContext();

export { useStore };

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
    return <Provider createStore={createStore}>{children}</Provider>;
};
