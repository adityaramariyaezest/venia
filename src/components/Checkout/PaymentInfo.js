import Form from "../Form/Form";
import Radio from "../Input/Radio";
import FlexBox from "../Layout/Flexbox";
import FlexItem from "../Layout/FlexItem/FLexItem";
import Input from "../Input/Input";
import Wrapper from "../Wrapper/Wrapper";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Lead from "../Lead/Lead";

const PaymentInfo = ({ initialValues, paymentInfo, handleNextButton, handleInputChange, handlePaymentRadioInput }) => {
    return (
        <div>
            <legend>
                <Lead text="3. Payment Information" />
            </legend>
            <>
                <Radio
                    name="payment"
                    id="credit__card__payment"
                    type="radio"
                    labelText="Credit Card"
                    direction="row-reverse"
                    onChange={handlePaymentRadioInput}
                    value="credit card"
                    checked={paymentInfo == "credit card"}
                />
                <div className="aem-Grid aem-Grid--12">
                    <Wrapper phone="12" tablet="12" desktop="6">
                        <FlexBox classes="d-flex--minus-margin">
                            <FlexItem size="12">
                                <Input
                                    id="name__on__card"
                                    labelText="Name on Card"
                                    type="text"
                                    name="name__on__card"
                                    classes="form__control"
                                    direction="column"
                                    onChange={handleInputChange}
                                    value={initialValues.name}
                                />
                            </FlexItem>
                        </FlexBox>

                        <FlexBox classes="d-flex--minus-margin">
                            <FlexItem size="12">
                                <Input
                                    id="credit__card__number"
                                    labelText="Credit Card Numberr"
                                    type="text"
                                    name="credit__card__number"
                                    classes="form__control"
                                    direction="column"
                                    onChange={handleInputChange}
                                    value={initialValues.card}
                                />
                            </FlexItem>
                        </FlexBox>

                        <FlexBox classes="d-flex--minus-margin">
                            <FlexItem size="8">
                                <Input
                                    id="expiration__date"
                                    labelText="Expiration Date"
                                    type="text"
                                    name="expiration__date"
                                    classes="form__control"
                                    direction="column"
                                    onChange={handleInputChange}
                                    value={initialValues.expiration}
                                />
                            </FlexItem>
                            <FlexItem size="4">
                                <Input
                                    id="cvv__number"
                                    labelText="CVV"
                                    type="text"
                                    name="cvv__number"
                                    classes="form__control"
                                    direction="column"
                                    onChange={handleInputChange}
                                    value={initialValues.cvv}
                                />
                            </FlexItem>
                        </FlexBox>

                        <Checkbox
                            id={`checkout__billing`}
                            filterCheckbox="Billing address same as shipping address"
                            direction="row-reverse"
                        />
                    </Wrapper>
                </div>
                <Radio
                    name="payment"
                    id="paypal_payment"
                    type="radio"
                    labelText="paypal"
                    direction="row-reverse"
                    onChange={handlePaymentRadioInput}
                    value="paypal"
                    checked={paymentInfo == "paypal"}
                />

                <FlexBox classes="d-flex__justify-center mt-50 mb-25">
                    <FlexItem>
                        <Button
                            text="Continue to review order"
                            type="outline"
                            variant="primary"
                            isBlock="true"
                            onPress={handleNextButton}
                        />
                    </FlexItem>
                </FlexBox>
            </>
        </div>
    );
};

export default PaymentInfo;
