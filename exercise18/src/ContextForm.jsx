// / ContextForm.jsx
import { useContext, useState } from "react";
import { AppContext } from "./AppContext";

const ContextForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!name || !email || !phone) return;

    const newItem = {
      id: editId || Date.now(),
      name,
      email,
      phone,
      favorite: false,
    };

    if (editId) {
      dispatch({ type: "update", payload: newItem });
    } else {
      dispatch({ type: "add", payload: newItem });
    }

    setName("");
    setEmail("");
    setPhone("");
    setEditId(null);
  };

  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editId ? "Update" : "Submit"}
      </button>
    </div>
  );
};

export default ContextForm;