import product from "./productTitle.module.scss";

const ProductTitle = ({ title }) => <h2 className={product.product__title}>{title}</h2>

export default ProductTitle;