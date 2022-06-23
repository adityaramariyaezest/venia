import Header from '../Header/Header';
import Wrapper from '../Header/Wrapper';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Sidebar from '../Sidebar/Sidebar';
import Filters from '../Filters/Filters';

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


const Layout = (props) => {
    return (
        <div className="container">
            <Header />
            <main>
                <div className="aem-Grid aem-Grid--12">
                    <Wrapper phone="12" tablet="3" desktop="3">
                        <Sidebar>
                            <Breadcrumb />
                            <h4 className='sidebar-title'>Filters</h4>
                            <Filters filterByTitle="categories" categories={filters.categories} />
                            <Filters filterByTitle="Brands" categories={filters.brands} />
                        </Sidebar>
                    </Wrapper>
                    <Wrapper phone="12" tablet="9" desktop="9">
                        {props.children}
                    </Wrapper>
                </div>
            </main>
        </div>
    );
}

export default Layout;