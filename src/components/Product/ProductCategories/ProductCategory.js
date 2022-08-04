import product from "./productCategory.module.scss";
import Wrapper from "../../Wrapper/Wrapper";
import { Link } from "react-router-dom";
const ProductCategory = ({ Id, title }) => {
    console.log('title', title)

    return (
        <Wrapper phone="12" tablet="6" desktop="3">
            <div className={product.product}>
                <Link to="/products" state={{ productID: Id }}>
                    <div className={product.product__image}>
                        <img src={`${process.env.PUBLIC_URL}/${title}.jpg`} alt={title} height="150" />
                    </div>
                    <div className={product.product__details}>
                        <p className={product.product__name}>{title}</p>
                        <div className={product.product__description}>Lorem ipsum dolor sit amet</div>
                    </div>
                </Link>
            </div>
        </Wrapper>
    );
}

export default ProductCategory;