import React, { useEffect, useState, useMemo } from 'react';
import Product from './Product';
import Wrapper from '../Wrapper/Wrapper';
import Pagination from '../Pagination/Pagination';

let PageSize = 9;

const ProductList = ({ order }) => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    if (products.length > 0 && order === 1) products.sort((a, b) => (a.price > b.price ? 1 : -1));
    else if (products.length > 0 && order === 2) products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((data) => data.json())
            .then((data) => {
                setProducts(data);
            })
    }, [])

    const currentProductList = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return products.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, products.length > 0, order]);

    return (
        <>
            <div className="aem-Grid aem-Grid--12">
                {currentProductList.length <= 0 ? <p>loading....</p> : currentProductList.map((product, index) =>
                    <Product Id={product.id} key={index} title={product.title} description={product.description} image={product.image} price={product.price} />
                )}
                <Wrapper phone="12" tablet="12" desktop="12">
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={products.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </Wrapper>
            </div>
        </>
    );
}

export default ProductList;