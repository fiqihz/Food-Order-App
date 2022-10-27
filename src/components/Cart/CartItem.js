const CartItem = (props) => {
  return (
    <li className="flex justify-between mb-4">
      <div>
        <h2 className="font-semibold mb-2">{props.item.name}</h2>
        <div>
          <span className="text-sm mr-14 text-[#8a2b06] font-bold">
            ${props.item.price.toFixed(2)}
          </span>
          <span className="text-sm px-2 py-1 rounded-lg border border-slate-400">
            x {props.item.amount}
          </span>
        </div>
      </div>
      <div className="mt-8">
        <button
          onClick={props.onRemoveItem}
          className="border border-[#8a2b06] px-3 rounded-lg mr-1 text-[#8a2b06] hover:bg-[#8a2b06] transition duration-300 hover:text-white"
        >
          -
        </button>
        <button
          onClick={props.onAddItem}
          className="border border-[#8a2b06] px-3 rounded-lg text-[#8a2b06] hover:bg-[#8a2b06] transition duration-300 hover:text-white"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
