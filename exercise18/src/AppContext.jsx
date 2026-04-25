
// AppContext.jsx
import { createContext, useReducer } from "react";

const AppContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((item) => item.id !== action.payload);
    case "update":
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    case "favorite":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, favorite: !item.favorite }
          : item
      );
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
export { AppContext };