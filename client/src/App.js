import React from 'react'
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import {
    Routes,
    Route, Link,
} from "react-router-dom";
import {useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {
    HOME,
    PRODUCT_LIST,
    PRODUCT,
    LOGIN,
    REGISTRATION,
    CART
} from "./sources/Consts/Links"

function App() {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={HOME} element={<Home/>}/>
                <Route exact path={PRODUCT_LIST} element={<ProductList/>}/>
                <Route exact path={PRODUCT} element={<Product/>}/>
                <Route exact path={CART} element={<Cart/>}/>
                <Route exact path={LOGIN} element={user ? <Link to="/" /> : <Login />}/>
                <Route exact path={REGISTRATION} element={user ? <Link to="/" /> : <Register />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
