import React, { useEffect } from "react";
import Card from "./card";
import axios from "../api/axios";
import { useState } from "react";

const Cardlayout = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const userid = localStorage.getItem("userid");
    const getdata = () => {
      axios
        .get(`/passkey/getall/${userid}`)
        .then((res) => {
          const data = res?.data?.data;
          setData(data);
        })
        .catch((eror) => {
          console.log(eror);
        });
    };
    getdata();
  }, []);
  return (
    <div className="main_section">
      {data == null ? (
        <h1>No Password Saved</h1>
      ) : (
        data.map((i, key) => {
          return <Card value={i} key={key} />;
        })
      )}
    </div>
  );
};

export default Cardlayout;
