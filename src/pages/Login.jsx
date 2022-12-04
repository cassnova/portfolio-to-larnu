import React from "react";
import axios from "axios";
import LarnuGif from "../LarnuGif.gif";
import "../pages/styles/Login.css";
import { useState } from "react";

const Login = ({ setToken, logged, setLogged, baseUrl }) => {
  const [values, setValues] = useState({
    email: "",
    discordId: "",
  });

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const login = () => {
    axios
      .post(`${baseUrl}/auth/login`, values)
      .then((res) => {
        return res.data.token;
      })
      .then((token) => {
        setToken(token);
        setLogged(true);
      });
  };

  function submit(e) {
    e.preventDefault();
    login();
  }

  return (
    <div className="Login-container">
      <form onSubmit={submit}>
        <img src={LarnuGif} alt="LarnU Gif" className="larnu-gif" />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
          required
        />
        <input
          value={values.discordId}
          onChange={handleChange}
          type="text"
          name="discordId"
          id="discordID"
          placeholder="Discord ID"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
