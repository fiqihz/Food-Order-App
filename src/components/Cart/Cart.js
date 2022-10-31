import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const checkItems = cartCtx.items.length > 0;

  const addItemHandler = (item) => {
    cartCtx.addItem(item);
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className="m-0 p-0 max-h-60 overflow-auto font-semibold text-lg mb-4">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAddItem={addItemHandler.bind(null, item)}
          onRemoveItem={removeItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal handleHideCart={props.handleHideCart}>
      {cartItems}
      <div className="flex justify-between items-center font-bold my-4 mx-0">
        <span className="text-2xl">Total Amount</span>
        <span className="text-2xl">{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className="text-right">
        <button
          className="cursor-pointer bg-transparent border border-[#8a2b06] py-2 px-8 rounded-xl ml-4 text-[#8a2b06] hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white transition duration-300"
          onClick={props.handleHideCart}
        >
          Close
        </button>
        {checkItems && (
          <button className="cursor-pointer bg-transparent border border-[#8a2b06] py-2 px-8 rounded-xl ml-4 hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white bg-[#8a2b06] text-white transition duration-300">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
