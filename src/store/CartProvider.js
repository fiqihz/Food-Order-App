import CartContext from "./cart-context";

const CartProvider = (props) => {
  const handleCartAddItem = (item) => {};

  const handleCartRemoveItem = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: handleCartAddItem,
    removeItem: handleCartRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
