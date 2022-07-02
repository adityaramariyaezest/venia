import Slider from "../components/Slider/Slider";
import ProductDetails from "../components/Product/ProductDetails";
import Wrapper from '../components/Wrapper/Wrapper';

const ProductDetailsPage = () => {
    return (
        <div className="aem-Grid aem-Grid--10">
            <Wrapper phone="10" tablet="5" desktop="5">
                <Slider />
            </Wrapper>
            <Wrapper phone="10" tablet="3" desktop="3">
                <ProductDetails />
            </Wrapper>
        </div>
    );
}

export default ProductDetailsPage;