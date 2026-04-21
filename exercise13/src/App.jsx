

import { useReducer } from "react";

const initialState = { countA: 0, countB: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementA":
      return { ...state, countA: state.countA + 1 };

    case "decrementA":
      return { ...state, countA: state.countA - 1 };

    case "incrementB":
      return { ...state, countB: state.countB + 1 };

    case "decrementB":
      return { ...state, countB: state.countB - 1 };

    case "reset":
      return { countA: 0, countB: 0 };

    default:
      return state;
  }
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* Counter A */}
      <div>
        <h1>A: {state.countA}</h1>
        <button onClick={() => dispatch({ type: "incrementA" })}>
          increment A
        </button>
        <button onClick={() => dispatch({ type: "decrementA" })}>
          decrement A
        </button>
      </div>

      {/* Counter B */}
      <div>
        <h1>B: {state.countB}</h1>
        <button onClick={() => dispatch({ type: "incrementB" })}>
          increment B
        </button>
        <button onClick={() => dispatch({ type: "decrementB" })}>
          decrement B
        </button>
      </div>

      
      {/* //reset */}
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>
          Reset All
        </button>
      </div>
    </>
  );
};

export default CounterWithReducer; 