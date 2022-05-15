import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes'
import Shop from "../pages/Shop";

const AppRouter = () => {
    const isAuth = false

    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route exact key={path} path={path} element={Component}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route exact key={path} path={path} element={Component}/>
            )}
            <Route path="*" element={<Shop/>}/>
        </Routes>
    );
};

export default AppRouter;