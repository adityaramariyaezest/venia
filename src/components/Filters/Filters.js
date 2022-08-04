import React, { useState, useEffect } from 'react';

import Checkbox from "../Checkbox/Checkbox";

import { setToLocalStorage } from '../../common/common';
import './filters.scss';

const Filters = ({ filterByTitle, onFilter, checkedProducts }) => {
    const [categories, setCategories] = useState([]);
    setToLocalStorage('categories', categories);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(data => data.json())
            .then(data => {
                setCategories(data);
            })
    }, [])

    return (
        <article>
            <p>{filterByTitle}</p>
            {categories && categories.map((category, index) => <Checkbox
                key={index} id={`category__${index}`}
                filterCheckbox={category}
                direction="row-reverse"
                onFilter={onFilter} />)}
        </article>
    );
}

export default Filters;
