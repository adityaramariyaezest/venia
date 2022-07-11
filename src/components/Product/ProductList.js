import React, { useEffect, useState, useMemo } from 'react';
import Product from './Product';
import Pagination from '../Pagination/Pagination'
let PageSize = 9;

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((data) => data.json())
            .then((data) => {
                setProducts(data);
            })
    }, [])

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        console.log('products=', products);
        return products.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, products]);

    return (
        <>
            <div className="aem-Grid aem-Grid--12">

                {currentTableData.length <= 0 ? <p>loading....</p> : currentTableData.map((product, index) =>
                    <Product Id={product.id} key={index + product.id} title={product.title} description={product.description} image={product.image} price={product.price} />
                )}
                {/* {products.length <= 0 ? <p>loading....</p> : products.map((product, index) => <Product Id={product.id} key={index + product.id} title={product.title} description={product.description} image={product.image} price={product.price} />)} */}
                <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn aem-GridColumn--default--12">
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={products.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </div>
        </>
    );
}

export default ProductList;
