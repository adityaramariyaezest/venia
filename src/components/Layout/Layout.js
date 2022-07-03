import Header from '../Header/Header';
import Wrapper from '../Wrapper/Wrapper';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Sidebar from '../Sidebar/Sidebar';
import Filters from '../Filters/Filters';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';

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


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Layout;