// ContextList.jsx
import { useContext } from "react";
import { AppContext } from "./AppContext";
import ContextItem from "./ContextItem";

const ContextList = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      {state.map((item) => (
        <ContextItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContextList;