import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "./CurdSlice";
import { useNavigate } from "react-router-dom";
import "../src/App.css";

export default function Create() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const users = useSelector((state) => state.curd.data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (name == "" || mail == ""){
      navigate("/");
      return
    }
    dispatch(
      create({ id: users[users.length - 1].id + 1, name: name, email: mail })
    );
    navigate("/");
  };

  return (
    <div>
      <div className="input-container">
        <h1>Create User's</h1>
        <div className="name">
          <input
            type="name"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
          {/* <label htmlFor="nme">Name</label> */}
        </div>
        <div className="email">
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setMail(e.target.value)}
          />
          {/* <label htmlFor="ema">Email</label> */}
        </div>
        <button onClick={handleClick}>submit</button>
      </div>
    </div>
  );
}
