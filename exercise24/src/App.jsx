import { useForm } from "react-hook-form";
import "./index.css";

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset(); // nadiifi form
  };

  return (
    <div className="container">
      <h2>Application Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <label>Full Name</label>
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^[A-Za-z ]{1,30}$/,
              message: "1-30 letters only",
            },
          })}
          className={errors.name && "error"}
        />
        {errors.name && <p>{errors.name.message}</p>}

        {/* Email */}
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email is required",
          })}
          className={errors.email && "error"}
        />
        {errors.email && <p>{errors.email.message}</p>}

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d).{5,}$/,
              message: "Min 5 & must include letters + numbers",
            },
          })}
          className={errors.password && "error"}
        />
        {errors.password && <p>{errors.password.message}</p>}

        {/* Role */}
        <label>Role</label>
        <select
          {...register("role", {
            required: "Select role",
          })}
          className={errors.role && "error"}
        >
          <option value="">Select role</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </select>
        {errors.role && <p>{errors.role.message}</p>}

        {/* Experience */}
        <label>Years of Experience</label>
        <input
          type="number"
          {...register("experience", {
            required: "Experience required",
            min: { value: 5, message: "Min 5" },
            max: { value: 50, message: "Max 50" },
          })}
          className={errors.experience && "error"}
        />
        {errors.experience && <p>{errors.experience.message}</p>}

        {/* Skills */}
        <label>Skills</label>
        <div className="skills">
          {["React", "JavaScript", "Node.js", "Python"].map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                value={skill}
                {...register("skills", {
                  required: "Select at least one skill",
                })}
              />
              {skill}
            </label>
          ))}
        </div>
        {errors.skills && <p>{errors.skills.message}</p>}

        {/* Agree */}
        <label>
          <input
            type="checkbox"
            {...register("agree", {
              required: "You must agree",
            })}
          />
          I agree to terms
        </label>
        {errors.agree && <p>{errors.agree.message}</p>}

        {/* Buttons */}
        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" className="reset" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;