import { useReducer, useState, createContext, useContext } from "react";
import styles from "./TodoApp.module.css";

// Context
const TodoContext = createContext();

// Reducer
const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

// Main App
const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Todo App</h2>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

// Form
const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({
        type: "add",
        payload: { id: Date.now(), text, completed: false },
      });
      setText("");
    }
  };

  return (
    <div className={styles.form}>
      <input
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
      />
      <button className={styles.button} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

// List
const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <ul className={styles.list}>
      {state.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

// Item
const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className={styles.item}>
      <span
        className={todo.completed ? styles.completed : ""}
        onClick={() => dispatch({ type: "toggle", payload: todo.id })}
      >
        {todo.text}
      </span>
      <button
        className={styles.deleteBtn}
        onClick={() => dispatch({ type: "delete", payload: todo.id })}
      >
        ✕
      </button>
    </li>
  );
};

export default TodoApp;