import React, { useEffect } from "react";
import Navbar from "../nav/nav";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContextProvider } from "../Authcontext/authcontext";
import axios from "../api/axios";

const Rootlayout = () => {
  const user = useAuthContextProvider();
  const navigate = useNavigate();
  const getUser = (token) => {
    axios
      .get(`/user/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        user.updateUser(res?.data);
        const userid = res.data.id;
        localStorage.setItem("userid", userid);
      })
      .catch((eror) => {
        if (eror?.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/");
        }
      });
  };
  const checkLogin = (token) => {
    if (!token && token !== undefined) {
      navigate("/password/all");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    getUser(token);
    checkLogin(token);
  }, []);
  return (
    <div className="main_page">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Rootlayout;
