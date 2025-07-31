import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../Services/apiServices";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async () => {
    //validate

    //submit login
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/");
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet???</span>
        <button className="btn btn-outline-dark">Sign up</button>
      </div>
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
        <div className="text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            &lt;&lt; Go to HomePage
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
