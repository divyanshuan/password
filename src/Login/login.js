import "./login.css";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const Login = () => {
  const [logindata, setLogindata] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChangelogin = (e) => {
    const { name, value } = e.target;
    setLogindata({ ...logindata, [name]: value });
  };
  const checkLogin = () => {
    const token = localStorage.getItem("token");

    if (token && token !== undefined) {
      navigate("/password/all");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/user/login",
        { email: logindata.username, password: logindata.password },
        {
          headers: {
            "cotent-Type": "application/json",
          },
        }
      );
      const res = response?.data;
      console.log(res);
      if (res.message === "authorized") {
        const acesstoken = response?.data?.access_token;
        localStorage.setItem("token", acesstoken);
        navigate("/password/all");
      } else {
        // swal("Invalid Details", "Enter Correct details", "error");
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkLogin();
  });

  return (
    <div className="main_body">
      <img className="logo_image" src={logo} alt="password_panda" />
      <div className="login_container">
        <form className="login_form">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={logindata.username}
            onChange={handleChangelogin}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={logindata.password}
            onChange={handleChangelogin}
          />
          <button onClick={handleSubmit} className="Login_button">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
