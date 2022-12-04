import React from "react";
import { useState } from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import "./styles/Contacto.css";

const Contacto = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [msjInput, setMsjInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [logoutError, setLogoutError] = useState(false);

  const handleInput = (e) => {
    setUsernameInput(e.target.value);
  };

  const handleInputEmail = (e) => {
    setEmailInput(e.target.value);
  };

  const handleInputMsj = (e) => {
    setMsjInput(e.target.value);
  };

  const login = (e) => {
    setIsLoading(true);
    setTimeout(() => {
      if (!usernameInput.length && !emailInput) {
        setLoginError(true);
        setLoginSuccess(false);
      } else {
        setLoginSuccess(true);
        setLoginError(false);
      }
      setIsLoading(false);
    }, 2000);
  };

  const logout = () => {
    let random = Math.floor(Math.random() * 10);
    random > 1
      ? setTimeout(() => {
          setUsernameInput("");
          setEmailInput("");
          setMsjInput("");
          setIsLoading(false);
          setLoginSuccess(false);
          setLoginError(null);
        }, 1000)
      : setLogoutError(true);
  };

  return (
    <div className="contacto-container">
      <Nav />
      <h2>¡Contactanos!</h2>
      <div className="card">
        <form className="form">
          <div className="inputContainer">
            <input
              autoComplete="off"
              onChange={handleInput}
              className={loginError ? "error-input" : ""}
              placeholder="Ingresa tu nombre"
              name="username"
              type="text-area"
              value={usernameInput}
            />
          </div>

          <div className="inputContainer">
            <input
              placeholder="Ingresa tu correo"
              className={loginError ? "error-input" : ""}
              name="email"
              type="text"
              onChange={handleInputEmail}
              value={emailInput}
            />
          </div>

          <div>
            <textarea
              placeholder="Ingresa tu mensaje"
              className={
                loginError
                  ? "mensaje-container error-input"
                  : "mensaje-container"
              }
              name="mensaje"
              type="text"
              onChange={handleInputMsj}
              value={msjInput}
            />
          </div>

          {!loginSuccess ? (
            <button type="button" className="btn" onClick={login}>
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          ) : (
            <button type="button" className="btn" onClick={logout}>
              Clickea para enviar otro mensaje
            </button>
          )}
          {loginError && (
            <span className="error-message">
              Debes llenar todos los campos por favor.
            </span>
          )}
          {loginSuccess && (
            <span className="success-message">¡Mensaje enviado con exito!</span>
          )}
          {logoutError && (
            <span className="error-message">No se pudo cerrar sesión.</span>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
