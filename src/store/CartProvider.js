import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItems = state.items[existingItemsIndex];

    let updatedItems;

    if (existingItems) {
      const updatedItem = {
        ...existingItems,
        amount: existingItems.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemsIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingItemsIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItems = state.items[existingItemsIndex];
    const updatedTotalAmount = state.totalAmount - existingItems.price;

    let updatedItems;
    if (existingItems.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItems,
        amount: existingItems.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemsIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const handleCartAddItem = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
  };

  const handleCartRemoveItem = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
