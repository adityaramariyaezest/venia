import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from './stores';
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Layout from './components/Layout/Layout';
import OrderSuccessful from './pages/orderSuccessful';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

import './fonts/muli/Muli-Regular.ttf'
import './scss/_index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/product-details" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-successful" element={<OrderSuccessful />} />
          </Routes>
        </Layout>



      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();