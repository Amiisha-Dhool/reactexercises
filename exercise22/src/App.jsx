import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    agree: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  // handle change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Form Example</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /><br />

        {/* Select */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br /><br />

        {/* Checkbox */}
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I agree
        </label>
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* Display Data */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Agree: {submittedData.agree ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
};

export default App;