import React from 'react';
import { useStore } from 'shell/zustand';
function App() {
    const getUsers = useStore((state) => state.getUsers);

    React.useEffect(() => {
        (async () => {
            await getUsers();
        })();
    }, [getUsers]);

    return <div>This is user page</div>;
}

export default App;
