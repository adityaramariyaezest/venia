import Header from '../Header/Header';
import Wrapper from '../Header/Wrapper';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Sidebar from '../Sidebar/Sidebar';

const Layout = (props) => {
    return (
        <div className="container">
            <Header />
            <main>
                <div className="aem-Grid aem-Grid--12">
                    <Breadcrumb />
                    <Wrapper phone="12" tablet="3" desktop="3">
                        <Sidebar />
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