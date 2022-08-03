import Container from "../components/Container/Container";
import Wrapper from "../components/Wrapper/Wrapper";
import Title from "../components/Headings/Title/Title";
import FlexBox from "../components/Layout/Flexbox";
import FlexItem from "../components/Layout/FlexItem/FLexItem";
import { Table } from "../components/Table/Table";
import TextContent from "../components/TextContent/TextContent";
import CartList from '../components/CartList/CartList';
import Description from "../components/Description/Description";
import SocialLinks from '../components/SocialIcons/SocialLinks';
import OfferBox from "../components/OfferBox/OfferBox";
import Lead from "../components/Lead/Lead";

const OrderSuccessful = () => {
    return (
        <Container>
            <div className="aem-Grid aem-Grid--12">
                <Title title="Order Successful!" isSpecial />

                <Wrapper phone="12" tablet="12" desktop="8" classes="pr-32">
                    <FlexBox>
                        <FlexItem size="12">
                            <Lead text="Order Number #1700834" />
                        </FlexItem>
                    </FlexBox>

                    <FlexBox classes="d-flex d-flex--minus-margin mb-50 mt-16" >
                        <FlexItem size="6">
                            <Table heading="shipping information" controls="false" size="small">
                                <FlexBox classes="d-flex--column">
                                    <FlexItem>
                                        <TextContent size="base" content="q_farhan@gmail.com " />
                                        <TextContent size="base" content="+1 (555) 229-3367" />
                                    </FlexItem>
                                    <FlexItem>
                                        <TextContent size="base" content="Qadim Farhan" />
                                        <TextContent size="base" content="1098 Wapello Street" />
                                        <TextContent size="base" content="Altadena, California 91001" />
                                        <TextContent size="base" content="United States" />
                                    </FlexItem>
                                </FlexBox>
                            </Table>
                        </FlexItem>

                        <FlexItem size="6">
                            <div className="mb-16">
                                <Table heading="payment information" controls="false" size="small">
                                    <FlexBox>
                                        <FlexItem>
                                            <TextContent size="base" content="Credit Card" />
                                            <TextContent size="base" content=" Visa ending in 4567" />
                                        </FlexItem>
                                    </FlexBox>
                                </Table>
                            </div>
                            <Table heading="payment information" controls="false" size="small">
                                <FlexBox>
                                    <FlexItem>
                                        <TextContent size="base" content="Credit Card" />
                                        <TextContent size="base" content=" Visa ending in 4567" />
                                    </FlexItem>
                                </FlexBox>
                            </Table>
                        </FlexItem>
                    </FlexBox>

                    <FlexBox classes="d-flex--minus-margin">
                        <FlexItem size="12">
                            <CartList />
                        </FlexItem>
                    </FlexBox>

                    <FlexBox classes="mt-50 d-flex--minus-margin">
                        <FlexItem size="12">
                            <Description classes="mb-16" content="You will also receive an email with the details and we will let you know when your order has shipped." />
                            <Description content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST." />
                        </FlexItem>
                    </FlexBox>
                </Wrapper>
                <Wrapper phone="hide" tablet="hide" desktop="4">
                    <OfferBox>
                        <h2>Give us a follow to SAVE 20% on your next order.</h2>
                        <SocialLinks size="large" iconColor="light" />
                    </OfferBox>
                </Wrapper>
            </div>
        </Container>
    );
}

export default OrderSuccessful;