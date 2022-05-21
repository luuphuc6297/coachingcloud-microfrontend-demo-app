import React from 'react';
import { useStore } from 'shell/zustand';
import './App.css';

function App() {
    const users = useStore((state) => state.users);

    console.log('users____', users);
    return <div className="Product">This is product page</div>;
}

export default App;
