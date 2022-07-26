import React, { useState, useEffect } from 'react';
import Wrapper from "../components/Wrapper/Wrapper";
import Filters from "../components/Filters/Filters";
import Sidebar from "../components/Sidebar/Sidebar";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ProductList from "../components/Product/ProductList";
import Sorting from "../components/Sorting/Sorting";
import Banner from "../components/Banner/Banner";
import Container from '../components/Container/Container';

const Home = () => {
    const [order, setOrder] = useState(0);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(data => data.json())
            .then(data => {
                setCategory(data);
            })
    }, [])

    const sortByPrice = event => {
        setOrder(parseInt(event.target.value))
    };

    return (
        <>
            <div className="aem-Grid aem-Grid--12">
                <Wrapper phone="12" tablet="12" desktop="12">
                    <Banner title="Men's Outerwear" image={`${process.env.PUBLIC_URL}/banner-inner.PNG`} description="men's outerwear image" />
                </Wrapper>
            </div>
            <Container>
                <div className="aem-Grid aem-Grid--12">
                    <Wrapper phone="12" tablet="3" desktop="3">
                        <Sidebar>
                            <Breadcrumb />
                            <p className='sidebar-title'>Filters</p>
                            <Filters filterByTitle="categories" categories={category} />
                        </Sidebar>
                    </Wrapper>
                    <Wrapper phone="12" tablet="9" desktop="9">
                        <Sorting id="sort" sortByPrice={sortByPrice} />
                        <ProductList order={order} />
                    </Wrapper>
                </div>
            </Container>
        </>
    );
}

export default Home;