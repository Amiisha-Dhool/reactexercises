import { useReducer } from "react";

const initialState = {
  language: "en",
  message: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LANGUAGE":
      const newLang = state.language === "en" ? "es" : "en";
      return {
        ...state,
        language: newLang,
        message:
          newLang === "en"
            ? "You clicked English"
            : "Has hecho clic en Español",
      };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>
        {state.language === "en" ? "Luqado isku badale😁😁" : "Aplicación de idioma"}
      </h1>

      <button onClick={() => dispatch({ type: "TOGGLE_LANGUAGE" })}>
        {state.language === "en"
          ? "Switch to Spanish"
          : "Cambiar a Inglés"}
      </button>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        {state.message}
      </p>
    </div>
  );
}