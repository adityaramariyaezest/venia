import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import Product from './Product';
import CartList from './CartList';
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const cartItems = useSelector(state => state.cartItems);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((data) => data.json())
            .then((data) => {
                setProducts(data);
            })
    }, [])

    return (
        <div className="aem-Grid aem-Grid--12">
            <CartList cartItems={cartItems} />
            {products.length <= 0 ? <p>loading....</p> : products.map((product, index) => <Product Id={product.id} key={index + product.id} title={product.title} description={product.description} image={product.image} price={product.price} />)}
        </div>
    );
}

export default ProductList;
