import { useRef } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-2">
        <label
          htmlFor="amount"
          className="font-bold text-xs sm:text-sm md:text-base sm:mr-2 mr-6"
        >
          Amount
        </label>
        <input
          ref={amountInputRef}
          id="amount"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
          className="border w-[30px] sm:w-[40px] rounded-lg text-center"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-orange-900 text-sm px-4 py-1 sm:px-6 md:px-8 md:py-2 md:font-bold md:text-base rounded-full text-white font-semibold hover:scale-105 hover:opacity-80 transition duration-300"
        >
          + Add
        </button>
      </div>
    </form>
  );
};

export default MealItemForm;
