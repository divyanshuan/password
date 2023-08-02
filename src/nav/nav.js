import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useAuthContextProvider } from "../Authcontext/authcontext";

const Navbar = () => {
  const user = useAuthContextProvider();
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
        <img src={user.userdata.profileimageurl} alt="profile_image" />
      </div>
    </div>
  );
};

export default Navbar;
