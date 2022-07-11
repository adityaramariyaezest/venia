import Wrapper from "../components/Wrapper/Wrapper";
import Filters from "../components/Filters/Filters";
import Sidebar from "../components/Sidebar/Sidebar";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ProductList from "../components/Product/ProductList";
import Banner from "../components/Banner/Banner";
import Filter from "../components/Filter/Filter";

const filters = {
    categories: [
        {
            id: "men__1",
            type: "men"
        },

        {
            id: "women__1",
            type: "women"
        },

        {
            id: "electronics__1",
            type: "electronics"
        },

        {
            id: "jwellery__1",
            type: "jwellery"
        },
    ],

    brands: [
        {
            id: "Roadster__1",
            type: "Roadster"
        },

        {
            id: "Allen Solly__1",
            type: "Allen Solly"
        },

        {
            id: "Adidas__1",
            type: "Adidas"
        },

        {
            id: "Adobe__1",
            type: "Adobe"
        },
    ]
}

const Home = () => {
    return (
        <div className="aem-Grid aem-Grid--12">
            <Wrapper phone="12" tablet="12" desktop="12">
                <Banner title="Women's" image={`${process.env.PUBLIC_URL}/banner-image.png`} description="" />
            </Wrapper>
            <Wrapper phone="12" tablet="3" desktop="3">
                <Sidebar>
                    <Breadcrumb />
                    <h4 className='sidebar-title'>Filters</h4>
                    <Filters filterByTitle="categories" categories={filters.categories} />
                    <Filters filterByTitle="Brands" categories={filters.brands} />
                </Sidebar>
            </Wrapper>
            <Wrapper phone="12" tablet="9" desktop="9">
                <Filter id="sort" />
                <ProductList />
            </Wrapper>
        </div>
    );
}

export default Home;