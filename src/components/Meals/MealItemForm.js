const MealItemForm = () => {
  return (
    <form>
      <div className="mb-2">
        <label htmlFor="amount" className="font-bold text-sm mr-2">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
          className="border w-[50px] px-1 py-1 rounded-lg text-center"
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-[#8a2b06] px-8 py-1 rounded-full text-white font-bold hover:scale-105 hover:opacity-80 transition duration-300">
          + Add
        </button>
      </div>
    </form>
  );
};

export default MealItemForm;
