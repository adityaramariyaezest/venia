import Wrapper from "../Wrapper/Wrapper";
import ProductTitle from "./ProductTitle";
import Lead from "../Lead/Lead";

const ProductExtraDetails = ({ title, description }) => {
  return (
    <div className="aem-Grid aem-Grid--12">
      <Wrapper phone="12" tablet="12" desktop="12">
        <ProductTitle title={title} />
        <Lead text="description" />
        <p>{description}</p>
      </Wrapper>
    </div>
  );
};

export default ProductExtraDetails;
