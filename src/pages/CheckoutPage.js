import Container from "../components/Container/Container";
import Bill from "../components/Cart/Bill/Bill";
import Wrapper from "../components/Wrapper/Wrapper";
import Title from "../components/Headings/Title/Title";

const CheckoutPage = () => {
    return (
        <Container>
            <div className="aem-Grid aem-Grid--12">
                <Title title="Checkout" isSpecial />
                <Wrapper phone="12" tablet="12" desktop="8">
                    <p>guest</p>
                </Wrapper>

                <Wrapper phone="12" tablet="12" desktop="4">
                    <Bill />
                </Wrapper>
            </div>
        </Container>
    );
}

export default CheckoutPage;


