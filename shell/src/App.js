import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const UserContainers = React.lazy(() => import('user/App'));
const ProductContainers = React.lazy(() => import('product/App'));

function App() {
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
                            <UserContainers />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
