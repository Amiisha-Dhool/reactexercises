
import { useState } from 'react';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    
     
    if (name && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setName("");
    setPassword("");
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>soo dhawow , {name}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;