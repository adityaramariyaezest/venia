import FlexBox from "../Layout/Flexbox";
import FlexItem from "../Layout/FlexItem/FLexItem";
import Button from "../Button/Button";
import FancyBorder from "../FancyBorder/FancyBorder";
import Lead from "../Lead/Lead";

const ExpressSignIn = () => {
    return (
        <FancyBorder>
            <FlexBox classes="d-flex--no-gap d-flex--align-center d-flex__justify__content__between">
                <FlexItem size="6">
                    <Lead text="Sign in for Express Checkout" classes="m-0" />
                </FlexItem>

                <FlexItem>
                    <Button text="Sign in" type="outline" variant="primary" />
                </FlexItem>
            </FlexBox>
        </FancyBorder>
    );
}

export default ExpressSignIn;