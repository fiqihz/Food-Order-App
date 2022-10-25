import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className="m-0 p-0 max-h-80 overflow-auto">
      {[{ id: "m1", name: "Ayam Suir", amount: 2, price: 4.3 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className="flex justify-between items-center font-bold my-4 mx-0">
        <span>Total Amount</span>
        <span>44.44</span>
      </div>
      <div className="text-right">
        <button className="cursor-pointer bg-transparent border border-[#8a2b06] py-2 px-8 rounded-xl ml-4 text-[#8a2b06] hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white">
          Close
        </button>
        <button className="cursor-pointer bg-transparent border border-[#8a2b06] py-2 px-8 rounded-xl ml-4 hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white bg-[#8a2b06] text-[#8a2b06]">
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
