// App.jsx
import ContextProvider from "./AppContext";
import ContextForm from "./ContextForm";
import ContextList from "./ContextList";

export default function App() {
  return (
    <ContextProvider>
      <h2>Contacts App</h2>
      <ContextForm />
      <ContextList />
    </ContextProvider>
  );
}