import Wrapper from "../components/Wrapper/Wrapper";
import BannerSlider from '../components/BannerSlider/BannerSlider';
import Container from '../components/Container/Container';
import ProductCategoryList from '../components/Product/ProductCategories/ProductCategoryList';
import Teaser from '../components/Teaser/Teaser';
import TeaserWithLocation from '../components/TeaserWithLocation/TeaserWithLocation';

const Home = () => {
    return (
        <>
            <div className="aem-Grid aem-Grid--12">
                <Wrapper phone="12" tablet="12" desktop="12">
                    <BannerSlider title="Women’s Outerwear" image={`${process.env.PUBLIC_URL}/banner.PNG`} description="" />
                </Wrapper>
            </div>
            <Container>
                <div className="aem-Grid aem-Grid--12">
                    <ProductCategoryList />
                </div>

                <div className="aem-Grid aem-Grid--12">
                    <Teaser
                        title="Take off in the new Signature Legging"
                        secondaryTitle="Lorem Ipsum Dolor Tempor"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna."
                        image={`${process.env.PUBLIC_URL}/teaser-image.PNG`}
                        description="teaser-image" />
                </div>

                <div className="aem-Grid aem-Grid--12 mt-50 mb-100">
                    <TeaserWithLocation
                        title="Conquer your next adventure"
                        secondaryTitle="Lorem Ipsum Dolor Tempor"
                        image={`${process.env.PUBLIC_URL}/teaser-image2.PNG`}
                        description="teaser-image" />
                </div>
            </Container>
        </>
    );
}

export default Home;