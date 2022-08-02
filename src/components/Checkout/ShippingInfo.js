import Radio from "../Input/Radio";
import FlexBox from "../Layout/Flexbox";
import FlexItem from "../Layout/FlexItem/FLexItem";
import Button from "../Button/Button";
import Lead from "../Lead/Lead";

const ShippingInfo = ({ shippingMethodIntialValues, handleShippingMethodNextButton, handleShippingMethodControls }) => {
    console.log('@@@ shippingMethodIntialValues', shippingMethodIntialValues)

    return (
        <div>
            <legend><Lead text="2. shipping Method" /></legend>
            <>
                <Radio
                    name="shipping__method"
                    id="mode"
                    type="radio"
                    labelText="Standard Shipping (4-8 business days via USPS) FREE"
                    direction="row-reverse"
                    onChange={handleShippingMethodControls}
                    value="Standard Shipping (4-8 business days via USPS) FREE"
                />
                <Radio
                    name="shipping__method"
                    id="estimatedTime"
                    type="radio"
                    labelText="Express Delivery (2-5 business days via USPS) $17.95"
                    direction="row-reverse"
                    onChange={handleShippingMethodControls}
                    value="Express Delivery (2-5 business days via USPS) $17.95"
                />
                <Radio
                    name="shipping__method"
                    id="fare"
                    type="radio"
                    labelText="Next Day Delivery (Next business days via FedEx) $53.61"
                    direction="row-reverse"
                    onChange={handleShippingMethodControls}
                    value="Next Day Delivery (Next business days via FedEx) $53.61"
                />

                <FlexBox classes="d-flex__justify-center mt-50 mb-25">
                    <FlexItem>
                        <Button text="continue to payment" type="outline" variant="primary" isBlock="true" onPress={handleShippingMethodNextButton} />
                    </FlexItem>
                </FlexBox>
            </>
        </div>


    );
}

export default ShippingInfo;