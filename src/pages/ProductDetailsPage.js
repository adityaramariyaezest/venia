import Slider from "../components/Slider/Slider";
import ProductDetails from "../components/Product/ProductDetails";
import Wrapper from '../components/Wrapper/Wrapper';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetailsPage = () => {
    const location = useLocation()
    const { productID } = location.state;

    console.log("id", productID);


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
        // Get percentage
        const starPercentage = (rate / starsTotal) * 100;
        // Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10
            }%`;

        ratingFinal.push({
            brand,
            rate,
            rateInPercentage: starPercentageRounded,
        });
        setRatings(() => {
            return ratingFinal;
        });
    }

    useEffect(() => {
        getProducts()
    }, [productID]);

    console.log('ratings', ratings);

    const { image, title, price, description } = product;





    return (
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
        </div>
    );
}

export default ProductDetailsPage;