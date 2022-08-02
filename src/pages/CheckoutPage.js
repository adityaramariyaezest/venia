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


const CheckoutPage = () => {
    const [page, setPage] = useState(0);

    const [initialValues, setInitialValues] = useState({
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
    const [shippingMethodIntialValues, setShippingMethodIntialValues] = useState({
        mode: '',
        estimatedTime: '',
        fare: ''
    });
    const [formValues, setFormValues] = useState([]);
    const [shippingMethodformValues, setShippingMethodformValues] = useState([]);
    const [shippingMethod, setShippingMethod] = useState('');


    function handleNextStep() {
        setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
        setToLocalStorage('user', formValues)
        setPage(page + 1);
    }

    function handleShippingMethodNextButton() {
        setShippingMethodformValues((prevShippingValues) => [...prevShippingValues, shippingMethodIntialValues]);
        setToLocalStorage('shippingMethod', shippingMethodformValues)
        setPage(page + 1);
    }

    function handleInputChange(e) {
        setInitialValues({ ...initialValues, [e.target.name]: e.target.value })
    }

    function handleShippingMethodControls(e) {
        setShippingMethodIntialValues({ ...shippingMethodIntialValues, [e.target.id]: e.target.value })
    }

    useEffect(() => {
        setToLocalStorage('user', formValues);
        setToLocalStorage('shippingMethod', shippingMethodformValues)

    }, [formValues, shippingMethodformValues])


    function handleFormSteps() {
        setPage(page + 1);
    }

    const MultiStepForm = () => {
        switch (page) {
            case 0:
                return <UserInfo
                    initialValues={initialValues}
                    formValues={formValues}
                    handleFormSteps={handleFormSteps}
                    handleNextStep={handleNextStep}
                    handleInputChange={handleInputChange} />;
            case 1:
                return <ShippingInfo
                    shippingMethod={shippingMethod}
                    setShippingMethod={setShippingMethod}
                    shippingMethodIntialValues={shippingMethodIntialValues}
                    shippingMethodformValues={shippingMethodformValues}
                    handleFormSteps={handleFormSteps}
                    handleShippingMethodNextButton={handleShippingMethodNextButton}
                    handleShippingMethodControls={handleShippingMethodControls}
                />;
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
                    <ShowCheckoutData page={page} formValues={formValues} shippingMethodformValues={shippingMethodformValues} />
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


