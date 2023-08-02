import React, { useState, useEffect } from "react";
import "./addmenue.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";

const Editmenue = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    pin: "",
    password: "",
  });
  const getdata = () => {
    axios
      .get(`/passkey/get/${id}`)
      .then((res) => {
        const data = res?.data?.data[0];
        Object.keys(data).map((key, index) => {
          if (data[key] == null) {
            data[key] = "";
          }
        });
        setData(data);
      })
      .catch((eror) => {
        console.log(eror);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/passkey/update/${id}`, data, {
        headers: {
          "cotent-Type": "application/json",
        },
      });
      const res = response?.data;
      console.log(res);
      navigate("/password/all");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add_section">
      <form className="add_form">
        <input
          type="text"
          name="name"
          id="website"
          placeholder="name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={data.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={data.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="pin"
          id="pin"
          placeholder="pin"
          value={data.pin}
          onChange={handleChange}
        />
        <div className="btn_sec">
          <button className="add_btn" onClick={handlesubmit}>
            submit
          </button>
          <Link className="add_btn" to="/password/all">
            back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Editmenue;
