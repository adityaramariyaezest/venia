import { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import Bill from "../components/Cart/Bill/Bill";
import Wrapper from "../components/Wrapper/Wrapper";
import Title from "../components/Headings/Title/Title";
import SecondaryTitle from '../components/Headings/SecondaryTitle/SecondaryTitle';
import ExpressSignIn from "../components/ExpressSignIn/ExpressSignIn";
import PaymentInfo from "../components/Checkout/PaymentInfo";
import UserInfo from "../components/Checkout/UserInfo";
import ShippingInfo from "../components/Checkout/ShippingInfo";
import ShowCheckoutData from "../components/Checkout/ShowCheckoutData";
import Form from "../components/Form/Form";
import { setToLocalStorage } from '../common/common';

import FlexBox from "../components/Layout/Flexbox";
import FlexItem from "../components/Layout/FlexItem/FLexItem";
import { Table } from "../components/Table/Table";
import TextContent from "../components/TextContent/TextContent";
import CartList from '../components/CartList/CartList';

const OrderSuccessful = () => {
    return (
        <Container>
            <div className="aem-Grid aem-Grid--12">
                <Title title="Order Successful!" isSpecial />

                <Wrapper phone="12" tablet="12" desktop="8" classes="pr-32">
                    <FlexBox classes="d-flex d-flex--minus-margin mb-50 mt-16" >
                        <FlexItem size="6">
                            <Table heading="shipping information" controls="false">
                                <FlexBox classes="d-flex--column">
                                    <FlexItem>
                                        <TextContent content="q_farhan@gmail.com " />
                                        <TextContent content="+1 (555) 229-3367" />
                                    </FlexItem>
                                    <FlexItem>
                                        <TextContent content="Qadim Farhan" />
                                        <TextContent content="1098 Wapello Street" />
                                        <TextContent content="Altadena, California 91001" />
                                        <TextContent content="United States" />
                                    </FlexItem>
                                </FlexBox>
                            </Table>
                        </FlexItem>

                        <FlexItem size="6">
                            <div className="mb-16">
                                <Table heading="payment information" controls="false">
                                    <FlexBox>
                                        <FlexItem>
                                            <TextContent content="Credit Card" />
                                            <TextContent content=" Visa ending in 4567" />
                                        </FlexItem>
                                    </FlexBox>
                                </Table>
                            </div>
                            <Table heading="payment information" controls="false">
                                <FlexBox>
                                    <FlexItem>
                                        <TextContent content="Credit Card" />
                                        <TextContent content=" Visa ending in 4567" />
                                    </FlexItem>
                                </FlexBox>
                            </Table>
                        </FlexItem>
                        {/* <CartListItem /> */}
                    </FlexBox>

                    <FlexBox classes="d-flex--minus-margin">
                        <FlexItem>
                            <CartList />
                        </FlexItem>
                    </FlexBox>

                    <FlexBox>
                        <FlexItem>
                            <TextContent content="You will also receive an email with the details and we will let you know when your order has shipped." />
                            <TextContent content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST." />
                        </FlexItem>
                    </FlexBox>
                </Wrapper>

                <Wrapper phone="12" tablet="12" desktop="4">

                </Wrapper>
            </div>
        </Container>
    );
}

export default OrderSuccessful;