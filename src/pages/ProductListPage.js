import React, { useState, useEffect } from 'react';
import Wrapper from "../components/Wrapper/Wrapper";
import Filters from "../components/Filters/Filters";
import Sidebar from "../components/Sidebar/Sidebar";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ProductList from "../components/Product/ProductList";
import Sorting from "../components/Sorting/Sorting";
import Banner from "../components/Banner/Banner";
import Container from '../components/Container/Container';
import { SlidersIcon } from '../components/Icons/Icons';
import Button from '../components/Button/Button';
import FlexBox from '../components/Layout/Flexbox';

const sortOptions = [
    {
        label: "Sort by Low to High",
        value: 1,
    },
    {
        label: "Sort by High to Low",
        value: 2,
    }
];

const Home = () => {
    const [order, setOrder] = useState(0);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [checkedProducts, setCheckedProducts] = useState([]);

    const [showFilters, setShowFilters] = useState(false);


    const getFilteredProducts = () => products.filter(product => checkedProducts.includes(product.category));

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((data) => data.json())
            .then((data) => {
                setProducts(data);
            })
        setFilteredProducts(getFilteredProducts());
    }, [checkedProducts])

    const sortByPrice = event => setOrder(parseInt(event.target.value));
    const handleCategoryFilter = event => {
        const categoryName = event.target.value;

        setCheckedProducts((prev) =>
            checkedProducts.includes(categoryName)
                ? prev.filter((cur) => cur !== categoryName)
                : [...prev, event.target.value]
        );
    }

    const handleClick = () => setShowFilters(!showFilters);

    const hideFilters = () => setShowFilters(!showFilters);

    return (
        <>
            <div className="aem-Grid aem-Grid--12">
                <Wrapper phone="12" tablet="12" desktop="12">
                    <Banner title="Men's Outerwear" image={`${process.env.PUBLIC_URL}/banner-inner.png`} description="men's outerwear image" />
                </Wrapper>
            </div>
            <Container>
                <div className="aem-Grid aem-Grid--12">
                    <Wrapper phone="12" tablet="3" desktop="3">
                        <Sidebar>
                            <Breadcrumb />
                            <FlexBox classes="d-flex__justify-center d-flex--align-center visible-mobile">
                                <Button size="small" text="Filter Results" type="link" variant="default" icon={SlidersIcon} isIcon onPress={handleClick} />
                                <Button size="small" text="Sort Products" type="link" variant="default" icon={SlidersIcon} isIcon />
                            </FlexBox>
                            <Filters
                                hideFilters={hideFilters}
                                filterByTitle="categories"
                                onFilter={handleCategoryFilter}
                                checkedProducts={checkedProducts}
                                showFilters={showFilters}
                                totalProducts={filteredProducts.length > 0 ? filteredProducts.length : products.length}
                            />
                        </Sidebar>
                    </Wrapper>
                    <Wrapper phone="12" tablet="9" desktop="9">
                        <Sorting id="sort" sortByPrice={sortByPrice} totalProducts={filteredProducts.length > 0 ? filteredProducts.length : products.length} options={sortOptions} />
                        <ProductList order={order} products={filteredProducts.length > 0 ? filteredProducts : products} />
                    </Wrapper>
                </div>
            </Container>
        </>
    );
}

export default Home;