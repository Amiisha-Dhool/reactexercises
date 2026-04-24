import { useReducer } from "react";

const initialState = {
  step: 1,
  firstName: "",
  secondName: "",
  email: "",
  phone: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "NEXT":
      return { ...state, step: state.step + 1 };

    case "BACK":
      return { ...state, step: state.step - 1 };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

 function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  // STEP 1
  if (state.step === 1) {
    return (
      <div>
        <h2>Step 1: Name</h2>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={state.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="secondName"
          placeholder="Second Name"
          value={state.secondName}
          onChange={handleChange}
        />

        <button onClick={() => dispatch({ type: "NEXT" })}>
          Next
        </button>
      </div>
    );
  }

  // STEP 2
  if (state.step === 2) {
    return (
      <div>
        <h2>Step 2: Contact</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={state.phone}
          onChange={handleChange}
        />

        <button onClick={() => dispatch({ type: "BACK" })}>
          Back
        </button>

        <button onClick={() => dispatch({ type: "NEXT" })}>
          Next
        </button>
      </div>
    );
  }

  // STEP 3 (REVIEW)
  if (state.step === 3) {
    return (
      <div>
        <h2>Review</h2>

        <p>First Name: {state.firstName}</p>
        <p>Second Name: {state.secondName}</p>
        <p>Email: {state.email}</p>
        <p>Phone: {state.phone}</p>

        <button onClick={() => dispatch({ type: "BACK" })}>
          Back
        </button>

        <button onClick={() => dispatch({ type: "RESET" })}>
          Submit
        </button>
      </div>
    );
  } 
}


export default Form;