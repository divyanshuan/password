import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import "./card.css";

import React from "react";

const Card = (props) => {
  const navigate = useNavigate();
  const deleat = (id) => {
    axios
      .get(`/passkey/delete/${id}`)
      .then((res) => {
        console.log(res.data);

        window.location.reload();
      })
      .catch((eror) => {
        console.log(eror);
      });
  };
  const edit = (value) => {
    navigate(`/password/edit/${value}`);
  };
  return (
    <div className="maincard">
      <div className="head_section">
        <img
          src="https://cdn-icons-png.flaticon.com/128/9436/9436365.png"
          alt="netflix logo"
        />
        <h1 className="card_head">{props.value.name}</h1>
      </div>
      <div className="main_content">
        {props.value.email != null ? (
          <p>
            Email: <span>{props.value.email}</span>
          </p>
        ) : (
          <></>
        )}
        {props.value.username != null ? (
          <p>
            Username: <span>{props.value.username}</span>
          </p>
        ) : (
          <></>
        )}
        {props.value.password != null ? (
          <p>
            Password: <span>{props.value.password}</span>
          </p>
        ) : (
          <></>
        )}
        {props.value.pin != null ? (
          <p>
            Pin: <span>{props.value.pin}</span>
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className="tail_section">
        <button className="mybtn" onClick={() => deleat(props.value.id)}>
          <img
            height={30}
            src="https://cdn-icons-png.flaticon.com/128/6460/6460112.png"
            alt="delete_button "
          />
        </button>
        <button
          className="mybtn"
          onClick={() => {
            edit(props.value.id);
          }}
        >
          <img
            height={30}
            src="https://cdn-icons-png.flaticon.com/128/2921/2921222.png"
            alt="edit_button"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
