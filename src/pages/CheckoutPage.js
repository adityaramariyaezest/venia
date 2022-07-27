import Container from "../components/Container/Container";
import Bill from "../components/Cart/Bill/Bill";
import Wrapper from "../components/Wrapper/Wrapper";
import Title from "../components/Headings/Title/Title";
import SecondaryTitle from '../components/Headings/SecondaryTitle/SecondaryTitle';
import Lead from "../components/Lead/Lead";
import Description from "../components/Description/Description";

const CheckoutPage = () => {
    return (
        <Container>
            <div className="aem-Grid aem-Grid--12">
                <Title title="Checkout" isSpecial />
                <Wrapper phone="12" tablet="12" desktop="8">
                    <SecondaryTitle title="guest checkout" />
                    <Lead text="Contact information" />
                    <Description content="We’ll use these details to keep you informed on your delivery." />
                </Wrapper>

                <Wrapper phone="12" tablet="12" desktop="4">
                    <Bill />
                </Wrapper>
            </div>
        </Container>
    );
}

export default CheckoutPage;


