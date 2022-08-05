import Slider from "../components/Slider/Slider";
import ProductDetails from "../components/Product/ProductDetails";
import Wrapper from '../components/Wrapper/Wrapper';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductExtraDetails from "../components/Product/ProductExtraDetails";
import Container from '../components/Container/Container';


const ProductDetailsPage = () => {
    const location = useLocation()
    const { productID } = location.state;
    console.log("@@ location", location)

    let starsTotal = 5;
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ratings, setRatings] = useState([]);

    const getProducts = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${productID}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);

        let ratingFinal = [];
        const rate = data.rating.rate;
        const brand = data.rating.count.toString();
        const starPercentage = (rate / starsTotal) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10
            }%`;

        ratingFinal.push({
            brand,
            rate,
            rateInPercentage: starPercentageRounded,
        });
        setRatings(() => ratingFinal);
    }

    useEffect(() => {
        getProducts()
    }, [productID]);

    const { image, title, price, description } = product;
    return (
        <Container>
            <div className="pl-100">
                <div className="aem-Grid aem-Grid--10">
                    <Wrapper phone="10" tablet="5" desktop="5">
                        <Slider image={image} />
                    </Wrapper>
                    <Wrapper phone="10" tablet="3" desktop="3">
                        <ProductDetails
                            image={image}
                            title={title}
                            price={price}
                            description={description}
                            ratings={ratings}
                            productID={productID}
                        />
                    </Wrapper>

                    <Wrapper phone="12" tablet="12" desktop="12">
                        <ProductExtraDetails
                            title={title}
                            description={description}
                        />
                    </Wrapper>
                </div>
            </div>
        </Container>
    );
}

export default ProductDetailsPage;