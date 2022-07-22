import product from "./productCategory.module.scss";
import Wrapper from "../../Wrapper/Wrapper";
import { Link } from "react-router-dom";
const ProductCategory = ({ Id, title, description }) => {
    return (
        <Wrapper phone="12" tablet="6" desktop="3">
            <div className={product.product}>
                <Link to="/product-details" state={{ productID: Id }}>
                    <div className={product.product__image}>
                        <img src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' alt={description} height="150" />
                    </div>
                    <div className={product.product__details}>
                        <h6 className={product.product__name}>{title}</h6>
                        <div className={product.product__description}>Lorem ipsum dolor sit amet</div>
                    </div>
                </Link>
            </div>
        </Wrapper>
    );
}

export default ProductCategory;