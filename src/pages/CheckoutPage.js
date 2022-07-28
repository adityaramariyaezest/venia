import Container from "../components/Container/Container";
import Bill from "../components/Cart/Bill/Bill";
import Wrapper from "../components/Wrapper/Wrapper";
import Title from "../components/Headings/Title/Title";
import SecondaryTitle from '../components/Headings/SecondaryTitle/SecondaryTitle';
import Lead from "../components/Lead/Lead";
import Description from "../components/Description/Description";
import Input from "../components/Input/Input";
import FlexBox from "../components/Layout/Flexbox";
import FlexItem from "../components/Layout/FlexItem/FLexItem";
import Button from "../components/Button/Button";
import Select from "../components/Select/Select";
import Radio from "../components/Input/Radio";
import Checkbox from "../components/Checkbox/Checkbox";
import Form from "../components/Form/Form";

const CheckoutPage = () => {
    return (
        <Container>
            <div className="aem-Grid aem-Grid--12">
                <Title title="Checkout" isSpecial />
                <Wrapper phone="12" tablet="12" desktop="8" classes="pr-32">
                    <SecondaryTitle title="guest checkout" />
                    <Lead text="Contact information" classes="mb-8" />
                    <Description classes="mb-16" content="We’ll use these details to keep you informed on your delivery." />

                    {/* <div className="aem-Grid aem-Grid--12">
                        <Wrapper phone="12" tablet="12" desktop="6">
                            <Input id="email" labelText="Email" type="text" placeholder="abc@xyz.com" name="email" classes="form__control" direction="column" />
                        </Wrapper>
                        <Wrapper phone="12" tablet="12" desktop="6">
                            <Input id="phone" labelText="phone number" type="text" placeholder="(222) 222-2222" name="phone" classes="form__control" direction="column" />
                        </Wrapper>
                    </div> */}

                    <Form>
                        <FlexBox classes="d-flex--no-gap">
                            <FlexItem size="6">
                                <Input id="email" labelText="Email" type="text" placeholder="abc@xyz.com" name="email" classes="form__control" direction="column" />
                            </FlexItem>
                            <FlexItem size="6">
                                <Input id="phone" labelText="phone number" type="text" placeholder="(222) 222-2222" name="phone" classes="form__control" direction="column" />
                            </FlexItem>
                        </FlexBox>

                        <legend><Lead text="1. shipping information" /></legend>

                        <FlexBox classes="d-flex--no-gap">
                            <FlexItem size="6">
                                <Select labelText="country" id="country" placeholder="United States" direction="column" />
                            </FlexItem>
                        </FlexBox>

                        <FlexBox classes="d-flex--no-gap">
                            <FlexItem size="6">
                                <Input id="first_name" labelText="first name" type="text" name="first_name" classes="form__control" direction="column" />
                            </FlexItem>

                            <FlexItem size="6">
                                <Input id="last_name" labelText="last name" type="text" name="last_name" classes="form__control" direction="column" />
                            </FlexItem>

                            <FlexItem size="6">
                                <Input id="street_address" labelText="street address" type="text" name="street_address" classes="form__control" direction="column" />
                            </FlexItem>

                            <FlexItem size="6">
                                <Input id="street_address2" labelText="street address 2" type="text" name="street_address2" classes="form__control" direction="column" />
                            </FlexItem>

                            <FlexItem size="6">
                                <Input id="city" labelText="city" type="text" name="city" classes="form__control" direction="column" />
                            </FlexItem>

                            <FlexItem size="6">
                                <FlexBox classes="d-flex--no-gap">
                                    <FlexItem size="9">
                                        <Input id="state" labelText="state" type="text" name="state" classes="form__control" direction="column" />
                                    </FlexItem>

                                    <FlexItem size="3">
                                        <Input id="zip" labelText="zip" type="text" name="zip" classes="form__control" direction="column" />
                                    </FlexItem>
                                </FlexBox>
                            </FlexItem>
                        </FlexBox>

                        <FlexBox classes="d-flex__justify-center mt-50 mb-25">
                            <FlexItem size="6">
                                <Button text="continue to shipping method" type="outline" variant="primary" isBlock="true" />
                            </FlexItem>
                        </FlexBox>
                    </Form>

                    <Form classes="border">
                        <legend><Lead text="2. shipping Method" /></legend>
                        <Radio name="shipping__method" id="standard__shipping" type="radio" labelText="Standard Shipping (4-8 business days via USPS) FREE" direction="row-reverse" />
                        <Radio name="shipping__method" id="express__shipping" type="radio" labelText="Express Delivery (2-5 business days via USPS) $17.95" direction="row-reverse" />
                        <Radio name="shipping__method" id="slow__shipping" type="radio" labelText="Next Day Delivery (Next business days via FedEx) $53.61" direction="row-reverse" />

                        <FlexBox classes="d-flex__justify-center mt-50 mb-25">
                            <FlexItem size="4">
                                <Button text="continue to payment" type="outline" variant="primary" isBlock="true" />
                            </FlexItem>
                        </FlexBox>
                    </Form>

                    <Form classes="border">
                        <legend><Lead text="3. Payment Information" /></legend>
                        <Radio name="payment" id="credit__card__payment" type="radio" labelText="Credit Card" direction="row-reverse" />

                        <div className="aem-Grid aem-Grid--12">
                            <Wrapper phone="12" tablet="12" desktop="6">
                                <FlexBox classes="d-flex--no-gap">
                                    <FlexItem size="12">
                                        <Input id="name__on__card" labelText="Name on Card" type="text" name="name__on__card" classes="form__control" direction="column" />
                                    </FlexItem>
                                </FlexBox>

                                <FlexBox classes="d-flex--no-gap">
                                    <FlexItem size="12">
                                        <Input id="credit__card__number" labelText="Credit Card Numberr" type="text" name="credit__card__number" classes="form__control" direction="column" />
                                    </FlexItem>
                                </FlexBox>

                                <FlexBox classes="d-flex--no-gap">
                                    <FlexItem size="8">
                                        <Input id="expiration__date" labelText="Expiration Date" type="text" name="expiration__date" classes="form__control" direction="column" />
                                    </FlexItem>
                                    <FlexItem size="4">
                                        <Input id="cvv__number" labelText="CVV" type="text" name="cvv__number" classes="form__control" direction="column" />
                                    </FlexItem>
                                </FlexBox>

                                <Checkbox id={`checkout__billing`} filterCheckbox="Billing address same as shipping address" direction="row-reverse" />
                            </Wrapper>
                        </div>

                        <Radio name="payment" id="paypal_payment" type="radio" labelText="paypal" direction="row-reverse" />

                    </Form>
                </Wrapper>

                <Wrapper phone="12" tablet="12" desktop="4">
                    <Bill />
                </Wrapper>
            </div>
        </Container>
    );
}

export default CheckoutPage;


