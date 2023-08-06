import React from "react";
import "./show.css";
import { useNavigate } from "react-router-dom";

const Show = () => {
  const navigate = useNavigate();

  return (
    <div className="show_container">
      <button
        onClick={() => {
          navigate("/password/all");
        }}
        className="show_button"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/6177/6177685.png"
          alt="Show_btn"
        />
      </button>
    </div>
  );
};

export default Show;
