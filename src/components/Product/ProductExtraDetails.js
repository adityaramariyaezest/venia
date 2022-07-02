import Wrapper from "../Wrapper/Wrapper";
import ProductTitle from "./ProductTitle";
import ProductFeatures from "./ProductFeatures/ProductFeatures";
import Lead from "../Lead/Lead";

const productFeatures = [
  {
    id: 'feature__101',
    text: 'Sweat-wicking',
    icon: 'scissors'
  },
  {
    id: 'feature__102',
    text: 'Breathable',
    icon: 'refresh-cw'
  },
  {
    id: 'feature__103',
    text: 'Lightweight fabric',
    icon: 'play'
  },
  {
    id: 'feature__104',
    text: '69% nylon, 31% lycra',
    icon: 'pie-chart'
  },
]

const ProductExtraDetails = ({ title, description }) => {
  return (
    <>
      <div className="aem-Grid aem-Grid--12">
        <Wrapper phone="12" tablet="6" desktop="5">
          <ProductTitle title={title} />
        </Wrapper>
      </div>

      <div className="aem-Grid aem-Grid--12">
        <Wrapper phone="12" tablet="8" desktop="6" >
          <Lead text="description" />
          <p>{description}</p>
        </Wrapper>
        <Wrapper phone="12" tablet="4" desktop="2"></Wrapper>

        <Wrapper phone="10" tablet="4" desktop="5">
          <ProductFeatures features={productFeatures} />
        </Wrapper>
      </div>
    </>
  );
};

export default ProductExtraDetails;
