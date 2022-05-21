import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useStore } from 'shell/zustand';
const UserContainers = React.lazy(() => import('user/App'));
const ProductContainers = React.lazy(() => import('product/App'));

function App() {
    const getUsers = useStore((state) => state.getUsers);

    React.useEffect(() => {
        (async () => {
            await getUsers();
        })();
    }, [getUsers]);

    return (
        <Routes>
            <Route path="/">
                <Route
                    index
                    path="/users"
                    element={
                        <Suspense fallback={<div>Loading</div>}>
                            <UserContainers />
                        </Suspense>
                    }
                />
                <Route
                    index
                    path="/products"
                    element={
                        <Suspense fallback={<div>Loading</div>}>
                            <ProductContainers />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
