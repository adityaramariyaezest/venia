import React, { useState, useEffect } from 'react';

import Checkbox from "../Checkbox/Checkbox";
import './filters.scss';



const Filters = ({ filterByTitle, onFilter }) => {
    const [categories, setCategories] = useState([]);

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
            {categories && categories.map((category, index) => <Checkbox key={index} id={`category__${index}`} filterCheckbox={category} direction="row-reverse" handleCheckbox={onFilter} />)}
        </article>
    );
}

export default Filters;
