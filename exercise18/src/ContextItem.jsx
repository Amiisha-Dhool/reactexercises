// ContextItem.jsx
import { useContext } from "react";
import { AppContext } from "./AppContext";

const ContextItem = ({ item }) => {
  const { dispatch } = useContext(AppContext);

  return (
    <div>
      <p>
        {item.favorite && "* "}
        {item.name}
      </p>
      <p>{item.email}</p>
      <p>{item.phone}</p>

      <button
        onClick={() => dispatch({ type: "favorite", payload: item.id })}
      >
        {item.favorite ? "Unfavorite" : "Favorite"}
      </button>

      <button
        onClick={() => dispatch({ type: "delete", payload: item.id })}
      >
        Delete
      </button>


      
    </div>
  );
};

export default ContextItem;