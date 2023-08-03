import React from "react";
import { useNavigate } from "react-router-dom";

const Show = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/password/all");
        }}
      >
        show
      </button>
    </div>
  );
};

export default Show;
