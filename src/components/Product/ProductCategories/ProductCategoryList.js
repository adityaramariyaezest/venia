import React, { Fragment, useEffect, useState } from "react";
import ProductCategory from "./ProductCategory";
import Loader from '../../Loader/Loader';

const ProductCategoryList = ({ image, description }) => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(data => data.json())
            .then(data => {
                setCategory(data);
            })
    }, [])

    return (
        <React.Fragment>
            {category.length <= 0 ? <Loader /> : category.map(item => (
                <ProductCategory
                    image={image}
                    title={item}
                    description={description}
                />
            ))}
        </React.Fragment>
    );
}

export default ProductCategoryList;