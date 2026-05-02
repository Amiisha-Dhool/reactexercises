import { createContext, useContext, useReducer } from "react";

// 1. Context
const CartContext = createContext();

// 2. Initial State
const initialState = {
  cart: [],
};

// 3. Reducer
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
}

// 4. Provider
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD", payload: item });
  };

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

// 5. Custom Hook
const useCart = () => useContext(CartContext);

// 6. App
export default function App() {
  return (
    <CartProvider>
      <h1>Shopping Cart</h1>
      <Products />
      <CartSummary />
    </CartProvider>
  );
}

// 7. Products
function Products() {
  const { addToCart } = useCart();

  const items = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 150 },
  ];

  return (
    <div>
      <h2>Products</h2>
      {items.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} - ${item.price}
          </span>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

// 8. Cart Summary
function CartSummary() {
  const { cart, total } = useCart();

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Items: {cart.length}</p>
      <p>Total: ${total}</p>

      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
        </div>
      ))}
    </div>
  );
}