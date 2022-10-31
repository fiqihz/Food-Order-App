import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };

  return (
    <li className="flex justify-between mb-2">
      <div>
        <h3 className="font-bold text-base sm:text-lg md:text-xl">
          {props.meal.name}
        </h3>
        <div className="italic text-sm sm:text-base md:text-lg">
          {props.meal.description}
        </div>
        <div className="font-bold text-base sm:text-lg md:text-xl text-indigo-300 mb-2">
          ${props.meal.price}
        </div>
      </div>
      <div className="flex items-center">
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
