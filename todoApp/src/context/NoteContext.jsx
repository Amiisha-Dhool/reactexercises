import { createContext, useReducer, useEffect } from "react";

export const NoteContext = createContext();

const initialState = JSON.parse(localStorage.getItem("notes")) || [];

function noteReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];

    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload);

    case "TOGGLE_NOTE":
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );

    case "UPDATE_NOTE":
      return state.map((note) =>
        note.id === action.payload.id
          ? {
              ...note,
              title: action.payload.title,
              content: action.payload.content,
            }
          : note
      );

    default:
      return state;
  }
}

export default function NoteProvider({ children }) {
  const [notes, dispatch] = useReducer(noteReducer, initialState);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NoteContext.Provider value={{ notes, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
}