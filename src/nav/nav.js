import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
import { useAuthContextProvider } from "../Authcontext/authcontext";

const Navbar = () => {
  const user = useAuthContextProvider();
  const navigate = useNavigate();
  return (
    <div className="main_menu">
      <h1>
        Welcome <span>{user.userdata.name}</span>{" "}
      </h1>
      <div className="img_sec">
        <Link to="/password/add" className="noSelect">
          <img
            src="https://cdn-icons-png.flaticon.com/128/148/148764.png"
            alt="netflix logo"
          />
        </Link>
        <button
          className="logout_btn"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("userid");
            navigate("/");
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/7175/7175236.png"
            alt="logout"
          />
        </button>
        <img src={user.userdata.profileimageurl} alt="profile_image" />
      </div>
    </div>
  );
};

export default Navbar;
