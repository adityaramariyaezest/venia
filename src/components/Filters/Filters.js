import React, { useState, useEffect } from 'react';

import Checkbox from "../Checkbox/Checkbox";
import Button from '../Button/Button';
import { LockIcon } from '../Icons/Icons';

import { setToLocalStorage } from '../../common/common';
import './filters.scss';
import FlexBox from '../Layout/Flexbox';

const Filters = ({ filterByTitle, onFilter, checkedProducts, showFilters, toggleFilters, totalProducts }) => {
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
        <div className={showFilters ? 'filters-wrapper filters-wrapper--active' : 'filters-wrapper'}>
            <FlexBox classes="d-flex__justify__content__between d-flex--align-center sidebar-title">
                <p>Filters</p>
                <Button text=""
                    type="link"
                    variant="default"
                    icon={LockIcon}
                    isIcon
                    svgIconMode="dark"
                    imageDescription="checkout-button-icon"
                    onPress={toggleFilters} />
            </FlexBox>

            <article>
                <p>{filterByTitle}</p>
                {categories && categories.map((category, index) => <Checkbox
                    key={index} id={`category__${index}`}
                    filterCheckbox={category}
                    direction="row-reverse"
                    onFilter={onFilter} />)}
            </article>

            <article className='d-flex d-flex--align-center d-flex__justify-center visible-mobile'>
                <Button
                    text={`see ${totalProducts} Results`}
                    type="solid"
                    variant="primary"
                    svgIconMode="dark"
                    imageDescription="checkout-button-icon"
                    onPress={toggleFilters}
                />
            </article>
        </div>

    );
}

export default Filters;
