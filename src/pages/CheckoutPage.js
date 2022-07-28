import { useSelector } from "react-redux";
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
import { Table } from "../components/Table/Table";
import TextContent from "../components/TextContent/TextContent";
import Media from "../components/Media/Media";

const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cartItems);
    console.log('items', cartItems);
    return (
        <Container>

            <div className="aem-Grid aem-Grid--12">
                <Title title="Checkout" isSpecial />

                <Wrapper phone="12" tablet="12" desktop="8" classes="pr-32">
                    <SecondaryTitle title="guest checkout" />
                    <Lead text="Contact information" classes="mb-8" />
                    <Description classes="mb-16" content="We’ll use these details to keep you informed on your delivery." />

                    <FlexBox classes="d-flex--column mb-50" >
                        <FlexItem>
                            <Table heading="shipping information">
                                <FlexBox>
                                    <FlexItem>
                                        <TextContent content="q_farhan@gmail.com" />
                                        <TextContent content="+1 (555) 229-3367" />
                                    </FlexItem>
                                    <FlexItem>
                                        <TextContent content="Qadim Farhan" />
                                        <TextContent content="098 Wapello Street" />
                                        <TextContent content="Altadena, California 91001" />
                                        <TextContent content="United States" />
                                    </FlexItem>
                                </FlexBox>
                            </Table>
                        </FlexItem>

                        <FlexItem>
                            <Table heading="shipping method">
                                <FlexBox>
                                    <FlexItem>
                                        <TextContent content="standard shipping" />
                                        <TextContent content="Est. delivery in 4 - 8 business days" />
                                        <TextContent content="FREE" />
                                    </FlexItem>
                                </FlexBox>
                            </Table>
                        </FlexItem>

                        <FlexItem>
                            <Table heading="payment information">
                                <FlexBox>
                                    <FlexItem>
                                        <TextContent content="Credit Card" />
                                        <TextContent content=" Visa ending in 4567" />
                                    </FlexItem>
                                </FlexBox>
                            </Table>
                        </FlexItem>

                        <FlexItem>
                            <Table controls="false" heading={`${cartItems.length} items in your order`}>
                                <FlexBox classes="d-flex--no-gap">
                                    {cartItems && cartItems.map(item => {
                                        return (
                                            <FlexItem size="6">
                                                <Media img={item.image} imgDesc={item.name} imgHeight="150" title={item.name}>
                                                    <TextContent content="Size: Medium" />
                                                    <TextContent content="Color: Storm" />
                                                    <TextContent content={`Quantity: ${item.qty}`} />
                                                </Media>
                                            </FlexItem>
                                        )
                                    })}
                                </FlexBox>

                            </Table>
                        </FlexItem>

                    </FlexBox>

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
                            <FlexItem>
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
                            <FlexItem>
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

                        <FlexBox classes="d-flex__justify-center mt-50 mb-25">
                            <FlexItem>
                                <Button text="Continue to review order" type="outline" variant="primary" isBlock="true" />
                            </FlexItem>
                        </FlexBox>
                    </Form>
                </Wrapper>

                <Wrapper phone="12" tablet="12" desktop="4">
                    <div className="mb-16">
                        <Table heading="Sign in for Express Checkout" />
                    </div>
                    <Bill />
                </Wrapper>
            </div>
        </Container>
    );
}

export default CheckoutPage;


