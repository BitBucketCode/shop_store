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

function App() {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/products/:category" element={<ProductList/>}/>
                <Route exact path="/product/:id" element={<Product/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
                <Route exact path="/login" element={user ? <Link to="/" /> : <Login />}/>
                <Route exact path="/register" element={user ? <Link to="/" /> : <Register />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
