const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "m1", name: "Ayam Suir", amount: 2, price: 4.3 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>44.44</span>
      </div>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};

export default Cart;
