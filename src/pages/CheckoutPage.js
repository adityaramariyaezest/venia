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

    const [formValues, setFormValues] = useState([]);


    function handleNextStep() {
        setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
        console.log("## formvalues", formValues);
        setToLocalStorage('user', formValues)
        setPage(page + 1);
    }

    function handleInputChange(e) {
        setInitialValues({ ...initialValues, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setToLocalStorage('user', formValues)
    }, [formValues])


    function handleFormSteps() {
        setPage(page + 1);
    }

    const MultiStepForm = () => {
        switch (page) {
            case 0:
                return <UserInfo initialValues={initialValues} formValues={formValues} handleFormSteps={handleFormSteps} handleNextStep={handleNextStep} handleInputChange={handleInputChange} />;
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
                    <ShowCheckoutData page={page} formValues={formValues} />
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


