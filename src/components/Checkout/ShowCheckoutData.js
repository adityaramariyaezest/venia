
import { useState, useEffect } from 'react';
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
import FancyBorder from '../FancyBorder/FancyBorder';
import CartList from '../CartList/CartList';

const ShippingMethod = ({ page, shipping }) => {
    return (
        <>
            {
                page > 1 &&
                <FlexItem>
                    <FancyBorder>
                        <Table heading="shipping method">
                            <FlexBox>
                                <FlexItem>
                                    <TextContent content={shipping} />
                                </FlexItem>
                            </FlexBox>
                        </Table>
                    </FancyBorder>

                </FlexItem>
            }</>
    )
}


const PaymentInformation = ({ page, payment }) => {
    console.log('page', page);
    if (page > 2) {
        return (
            <FlexItem>
                <FancyBorder>
                    <Table heading="payment information">
                        <FlexBox>
                            <FlexItem>
                                <TextContent content={payment} />
                                <TextContent content=" Visa ending in 4567" />
                            </FlexItem>
                        </FlexBox>
                    </Table>
                </FancyBorder>
            </FlexItem>
        )
    }
}

const CartListItem = ({ page }) => {

    const navigate = useNavigate();
    const navigateToOrderSuccessful = () => navigate('/order-successful');

    if (page == 3) {
        return (
            <FlexItem>
                <FancyBorder>
                    <CartList />
                </FancyBorder>


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

const ShowCheckoutData = ({ page, userInfo, shippingMethodformValues, shipping, payment }) => {

    const { email, phone, firstName, lastName, streetAddress1, city, state, zip, country } = userInfo;
    // console.log('$$ formValues', formValues)
    // const [userInformation, setUserInformation] = useState(formValues);

    // useEffect(() => {
    //     setUserInformation(formValues);
    // }, [formValues])

    return (
        <Form>
            <FlexBox classes="d-flex--column d-flex--minus-margin mb-50 mt-16" >
                {page > 0 &&
                    <>
                        <FlexItem>
                            <FancyBorder>
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
                            </FancyBorder>

                        </FlexItem>
                        <ShippingMethod page={page} shipping={shipping} shippingMethodformValues={shippingMethodformValues} />
                        <PaymentInformation page={page} payment={payment} />
                        <CartListItem page={page} />
                    </>
                }
            </FlexBox>
        </Form>
    );
}

export default ShowCheckoutData;