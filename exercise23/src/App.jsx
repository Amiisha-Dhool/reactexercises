import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    experience: "",
    skills: [],
    agree: false,
    notify: false,
  });

  const [errors, setErrors] = useState({});

  const skillsList = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "UI Design",
    "API Development",
  ];

  // handle change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "skills") {
      let updatedSkills = [...form.skills];
      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter((s) => s !== value);
      }
      setForm({ ...form, skills: updatedSkills });
    } else {
      setForm({
        ...form,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  // validation
  const validate = () => {
    let err = {};

    // name
    if (!form.name) {
      err.name = "Full name is required";
    } else if (!/^[A-Za-z ]{2,30}$/.test(form.name)) {
      err.name = "Name must be 2-30 letters only";
    }

    // email
    if (!form.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email";
    }

    // password
    if (!form.password) {
      err.password = "Password is required";
    } else if (form.password.length < 5) {
      err.password = "Minimum 5 characters";
    }

    // role
    if (!form.role) {
      err.role = "Please select a role";
    }

    // experience
    if (!form.experience) {
      err.experience = "Experience is required";
    } else if (
      form.experience < 5 ||
      form.experience > 50
    ) {
      err.experience = "Must be between 5 - 50";
    }

    // skills
    if (form.skills.length === 0) {
      err.skills = "Select at least one skill";
    }

    // agree
    if (!form.agree) {
      err.agree = "You must agree to terms";
    }

    return err;
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully ✅");
      console.log(form);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Job Application Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={{
            border: errors.name ? "1px solid red" : "1px solid #ccc",
          }}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        {/* Email */}
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{
            border: errors.email ? "1px solid red" : "1px solid #ccc",
          }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={{
            border: errors.password ? "1px solid red" : "1px solid #ccc",
          }}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        {/* Role */}
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          style={{
            border: errors.role ? "1px solid red" : "1px solid #ccc",
          }}
        >
          <option value="">Select a role</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </select>
        {errors.role && <p style={{ color: "red" }}>{errors.role}</p>}

        {/* Experience */}
        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          value={form.experience}
          onChange={handleChange}
          style={{
            border: errors.experience ? "1px solid red" : "1px solid #ccc",
          }}
        />
        {errors.experience && (
          <p style={{ color: "red" }}>{errors.experience}</p>
        )}

        {/* Skills */}
        <div>
          <p>Skills</p>
          {skillsList.map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                name="skills"
                value={skill}
                onChange={handleChange}
              />
              {skill}
            </label>
          ))}
          {errors.skills && (
            <p style={{ color: "red" }}>{errors.skills}</p>
          )}
        </div>

        {/* Agree */}
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />
          I agree to terms
        </label>
        {errors.agree && (
          <p style={{ color: "red" }}>{errors.agree}</p>
        )}

        {/* Notify */}
        <label>
          <input
            type="checkbox"
            name="notify"
            checked={form.notify}
            onChange={handleChange}
          />
          Receive notifications
        </label>

        <br /><br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;