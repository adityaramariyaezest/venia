import React, { useEffect, useState } from 'react';
import Product from './Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((data) => data.json())
            .then((data) => {
                setProducts(data);
            })
    }, [])

    return (
        <div className="aem-Grid aem-Grid--12">
            {products.length <= 0 ? <p>loading....</p> : products.map((product, index) => <Product key={index + product.id} title={product.title} description={product.description} image={product.image} price={product.price} />)}
        </div>
    );
}

export default ProductList;