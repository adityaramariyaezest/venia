import { useSelector } from "react-redux";

import { Table } from "../Table/Table";
import FlexBox from "../Layout/Flexbox";
import FlexItem from "../Layout/FlexItem/FLexItem";
import TextContent from "../TextContent/TextContent";
import Media from "../Media/Media";

const CartList = () => {
    const cartItems = useSelector(state => state.cartItems);

    return (
        <Table controls="false" heading={`${cartItems.length} items in your order`}>
            <FlexBox classes="d-flex--minus-margin">
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
    );
}

export default CartList;