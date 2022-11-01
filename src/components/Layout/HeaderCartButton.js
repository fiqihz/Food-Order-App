import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.reduce((curNumber, items) => {
    return curNumber + items.amount;
  }, 0);

  return (
    <button
      className="cursor-pointer border-none bg-orange-900 text-white flex justify-around items-center rounded-3xl font-bold hover:bg-[#2c0d00] active:bg-[#2c0d00] hover:scale-105 transition duration-300 px-3 py-2 sm:px-6 md:px-8 lg:px-12 lg:py-3"
      onClick={props.handleShowCart}
    >
      <span className="w-5 h-5 mr-1 sm:w-4 sm:h-4 md:w-5 md:h-5 sm:mr-2 lg:w-6 lg:h-6 lg:mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      </span>
      <span className="text-sm md:text-base hidden sm:block">Your Cart</span>
      <span className="ml-2 bg-orange-700 px-2 py-[2px] rounded-full font-bold md:ml-3 hidden sm:block">
        {totalItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
