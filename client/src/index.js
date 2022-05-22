import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProductList from "./pages/ProductList/ProductList";


export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            product: new ProductStore(),
        }}>
{/*            <App />*/}
{/*            <Home />*/}
{/*            <Cart/>*/}
{/*            <Product/>*/}
{/*            <Login/>*/}
{/*            <Register/>*/}
            <ProductList/>

        </Context.Provider>
    </React.StrictMode>
);

