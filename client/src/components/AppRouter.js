import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const isAuth = false;
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {/*Редирект на главную страницу, если ввели неправильный адрес*/}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} />}/>
        </Routes>
    );
};

export default AppRouter;