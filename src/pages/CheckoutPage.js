import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import Bill from "../components/Cart/Bill/Bill";
import Wrapper from "../components/Wrapper/Wrapper";
import Title from "../components/Headings/Title/Title";
import SecondaryTitle from '../components/Headings/SecondaryTitle/SecondaryTitle';
import Lead from "../components/Lead/Lead";
import ExpressSignIn from "../components/ExpressSignIn/ExpressSignIn";
import PaymentInfo from "../components/Checkout/PaymentInfo";
import UserInfo from "../components/Checkout/UserInfo";
import ShippingInfo from "../components/Checkout/ShippingInfo";
import ShowCheckoutData from "../components/Checkout/ShowCheckoutData";
import { setToLocalStorage, getFromLocalStorage } from '../common/common';
import Form from "../components/Form/Form";
import CartList from "../components/Checkout/CartList";

const CheckoutPage = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState([{
        email: '',
        phone: '',
        country: '',
        firstName: '',
        lastName: '',
        streetAddress1: '',
        streetAddress2: '',
        city: '',
        state: '',
        zip: '',
    }]);

    function handleFormSteps() {
        setPage(page + 1);
        setToLocalStorage('checkoutInformation', formData);
    }

    const MultiStepForm = () => {
        switch (page) {
            case 0:
                return <UserInfo handleFormSteps={handleFormSteps} formData={formData} setFormData={setFormData} />;
            case 1:
                return <ShippingInfo handleFormSteps={handleFormSteps} />;
            case 2:
                return <PaymentInfo handleFormSteps={handleFormSteps} />;
            default:
                return ''
        }
    }

    return (
        <Container>
            <div className="aem-Grid aem-Grid--12">
                <Title title="Checkout" isSpecial />

                <Wrapper phone="12" tablet="12" desktop="8" classes="pr-32">
                    <SecondaryTitle title="guest checkout" />
                    <ShowCheckoutData formData={formData} page={page} />

                    <Form>
                        <MultiStepForm />
                    </Form>

                </Wrapper>

                <Wrapper phone="12" tablet="12" desktop="4">
                    <div className="mb-16">
                        <ExpressSignIn />
                    </div>
                    <Bill isButton="false" />
                </Wrapper>
            </div>
        </Container>
    );
}

export default CheckoutPage;


