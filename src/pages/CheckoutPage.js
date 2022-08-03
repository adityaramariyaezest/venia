import { useState } from "react";
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


const CheckoutPage = () => {
    const [page, setPage] = useState(0);

    const [userInitialValues, setUserInitialValues] = useState({
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
    });

    const [paymentInitialValues, setPaymentInitialValues] = useState({
        name: '',
        card: '',
        expiration: '',
        cvv: '',
    });

    const [userInfo, setUserInfo] = useState([]);
    const [shipping, setShipping] = useState('');
    const [paymentInfo, setPaymentInfo] = useState('');


    // functions used in userInfo form: step 1
    function handlerUserInfoNextButton() {
        setUserInfo(userInitialValues);
        setPage(page + 1);
        setToLocalStorage('user', userInitialValues);
    }

    function handleUserInfoInput(e) {
        setUserInitialValues({ ...userInitialValues, [e.target.name]: e.target.value })
    }

    // functions used in shippingInfo form: step 2
    function handleShippingNextButton() {
        setShipping(shipping);
        setPage(page + 1);
        setToLocalStorage('shipping', shipping);
    }

    function handleShippingInput(e) {
        setShipping(e.currentTarget.value)
        setToLocalStorage('shipping', shipping);
    }


    // functions used in PaymentInfo form: step 3
    function handlePaymentNextButton() {
        setPaymentInfo(paymentInfo);
        setPage(page + 1);
        setToLocalStorage('payment', paymentInfo);
    }

    function handlePaymentRadioInput(e) {
        setPaymentInfo(e.currentTarget.value)
        setToLocalStorage('payment', paymentInfo);
    }

    function handlePaymentInput(e) {
        setPaymentInitialValues({ ...paymentInitialValues, [e.target.name]: e.target.value })
    }


    const MultiStepForm = () => {
        switch (page) {
            case 0:
                return <UserInfo
                    initialValues={userInitialValues}
                    userInfo={userInfo}
                    handleNextButton={handlerUserInfoNextButton}
                    handleInputChange={handleUserInfoInput} />;
            case 1:
                return <ShippingInfo
                    shipping={shipping}
                    handleNextButton={handleShippingNextButton}
                    handleInputChange={handleShippingInput}
                />;
            case 2:
                return <PaymentInfo
                    initialValues={paymentInitialValues}
                    paymentInfo={paymentInfo}
                    handleNextButton={handlePaymentNextButton}
                    handleInputChange={handlePaymentInput}
                    handlePaymentRadioInput={handlePaymentRadioInput}
                />;
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
                    <ShowCheckoutData page={page} userInfo={userInfo} shipping={shipping} payment={paymentInfo} />
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


