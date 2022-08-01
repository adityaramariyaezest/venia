import Radio from "../Input/Radio";
import FlexBox from "../Layout/Flexbox";
import FlexItem from "../Layout/FlexItem/FLexItem";
import Button from "../Button/Button";
import Lead from "../Lead/Lead";

const ShippingInfo = ({ handleFormSteps }) => {
    return (
        <div>
            <legend><Lead text="2. shipping Method" /></legend>
            <>
                <Radio name="shipping__method" id="standard__shipping" type="radio" labelText="Standard Shipping (4-8 business days via USPS) FREE" direction="row-reverse" />
                <Radio name="shipping__method" id="express__shipping" type="radio" labelText="Express Delivery (2-5 business days via USPS) $17.95" direction="row-reverse" />
                <Radio name="shipping__method" id="slow__shipping" type="radio" labelText="Next Day Delivery (Next business days via FedEx) $53.61" direction="row-reverse" />

                <FlexBox classes="d-flex__justify-center mt-50 mb-25">
                    <FlexItem>
                        <Button text="continue to payment" type="outline" variant="primary" isBlock="true" onPress={handleFormSteps} />
                    </FlexItem>
                </FlexBox>
            </>
        </div>


    );
}

export default ShippingInfo;