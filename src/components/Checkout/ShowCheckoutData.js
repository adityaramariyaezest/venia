
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import Form from "../Form/Form";
import FlexBox from "../Layout/Flexbox";
import FlexItem from "../Layout/FlexItem/FLexItem";
import { Table } from "../Table/Table";
import TextContent from "../TextContent/TextContent";
import Media from '../Media/Media';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { getFromLocalStorage } from '../../common/common';

const ShippingMethod = ({ page, shippingMethodformValues }) => {
    const [shippingMethod, setShippingMethod] = useState(shippingMethodformValues);


    useEffect(() => {
        setShippingMethod(shippingMethodformValues);
    }, [shippingMethodformValues])

    {
        console.log('@@ shippingArray', shippingMethod);

        page > 1 &&
            shippingMethod && shippingMethod.map(({ mode, estimatedTime, fare }) => {
                return (
                    <FlexItem>
                        <Table heading="shipping method">
                            <FlexBox>
                                <FlexItem>
                                    <TextContent content={mode} />
                                    <TextContent content={estimatedTime} />
                                    <TextContent content={fare} />
                                </FlexItem>
                            </FlexBox>
                        </Table>
                    </FlexItem>
                )
            })
    }
}


const PaymentInformation = ({ page }) => {
    console.log('page', page);
    if (page > 2) {
        return (
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
        )
    }
}

const CartListItem = ({ page }) => {
    const cartItems = useSelector(state => state.cartItems);

    const navigate = useNavigate();
    const navigateToOrderSuccessful = () => navigate('/order-successful');

    if (page == 3) {
        return (
            <FlexItem>
                <Table controls="false" heading={`${cartItems.length} items in your order`}>
                    <FlexBox classes="d-flex--no-gap">
                        {cartItems && cartItems.map(item => {
                            return (
                                <FlexItem size="6" classes="mt-16">
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

                <FlexBox classes="d-flex__justify-center mt-50 mb-24">
                    <FlexItem>
                        <Button text="place order" type="solid" variant="primary" onPress={navigateToOrderSuccessful} />
                    </FlexItem>
                </FlexBox>

                <FlexBox classes="d-flex__justify-center mb-25 d-flex--no-gap">
                    <span className="mr-8">By clicking confirm order you agree to our</span>
                    <Link to="/terms">
                        Terms and Conditions
                    </Link>
                </FlexBox>
            </FlexItem>
        )
    }
}

const ShowCheckoutData = ({ page, formValues, shippingMethodformValues }) => {
    const [userInformation, setUserInformation] = useState(formValues);

    useEffect(() => {
        setUserInformation(formValues);
    }, [formValues])

    return (
        <Form>
            <FlexBox classes="d-flex--column d-flex--minus-margin mb-50 mt-16" >
                {page > 0 &&
                    userInformation && userInformation.map(({ email, phone, firstName, lastName, country, city, state, zip, streetAddress1 }) => {
                        return (
                            <>
                                <FlexItem>
                                    <Table heading="shipping information">
                                        <FlexBox>
                                            <FlexItem>
                                                <TextContent content={email} />
                                                <TextContent content={phone} />
                                            </FlexItem>
                                            <FlexItem>
                                                <TextContent content={`${firstName} ${lastName}`} />
                                                <TextContent content={streetAddress1} />
                                                <TextContent content={`${city} ${state} ${zip}`} />
                                                <TextContent content={country} />
                                            </FlexItem>
                                        </FlexBox>
                                    </Table>
                                </FlexItem>
                                <ShippingMethod page={page} shippingMethodformValues={shippingMethodformValues} />
                                <PaymentInformation page={page} />
                                <CartListItem page={page} />
                            </>
                        )
                    })}
            </FlexBox>
        </Form>
    );
}

export default ShowCheckoutData;