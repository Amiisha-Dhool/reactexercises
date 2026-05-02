import React, { useState } from "react";

function App() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [cart, setCart] = useState([]);

  // Add product
  const addToCart = () => {
    if (!productName || !price) return;

    const newItem = {
      id: Date.now(),
      name: productName,
      price: Number(price),
      quantity: 1,
    };

    setCart([...cart, newItem]);
    setProductName("");
    setPrice("");
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {/* Input Section */}
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addToCart}>Add</button>

      <hr />

      {/* Cart Items */}
      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <strong>{item.name}</strong> - ${item.price}

          <div>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <p>SubTotal: ${item.price * item.quantity}</p>
        </div>
      ))}

      <hr />

      {/* Total */}
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}

export default App;