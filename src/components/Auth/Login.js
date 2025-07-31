import { useState } from "react";
import "./Login.scss";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("You clicked Login button");
  };
  return (
    <div className="login-container">
      <div className="header">Don't have an account yet???</div>
      <div className="title col-4 mx-auto">NahaQuiz</div>
      <div className="welcome col-4 mx-auto">Hello, Who's this?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group ">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="form-group ">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <span>Forgot your password?</span>
        <div>
          <button onClick={() => handleLogin()}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
