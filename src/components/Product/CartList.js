const CartList = ({ cartItems }) => {
    return (
        <div>
            Cart Items
            <ul>
                {
                    cartItems.map((item) => {
                        return <li>
                            Name: {item.name}
                            Price: {item.price}
                        </li>
                    })
                }
            </ul>
        </div>
    );
}

export default CartList;