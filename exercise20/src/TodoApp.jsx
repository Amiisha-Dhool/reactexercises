import { useReducer, useState, createContext, useContext } from "react";

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

// App
const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center">
        <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Todo App
          </h2>
          <TodoForm />
          <TodoList />
        </div>
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
    <div className="flex gap-2 mb-5">
      <input
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
      />
      <button
        onClick={handleAdd}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
      >
        Add
      </button>
    </div>
  );
};

// List
const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <ul className="space-y-3">
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
    <li className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
      <span
        onClick={() => dispatch({ type: "toggle", payload: todo.id })}
        className={`cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => dispatch({ type: "delete", payload: todo.id })}
        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md text-sm"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoApp;