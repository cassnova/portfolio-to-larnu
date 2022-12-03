import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SobreMi from "./SobreMi";
import Portafolio from "./Portafolio";
import Contacto from "./Contacto";
import Nav from "../components/nav/Nav";
import "../pages/styles/Inicio.css";

const Inicio = ({
  dataToken,
  setDataToken,
  checked,
  setChecked,
  baseUrl,
  token,
}) => {
  useEffect(() => {
    async function checkToken() {
      axios
        .get(`${baseUrl}/auth/check`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setDataToken(res.data);
          setChecked(true);
          console.log(res);
        });
    }
    checkToken();
  }, [baseUrl, setChecked, setDataToken, token]);

  return (
    <>
      {checked ? (
        <div className="inicio-container">
          <Routes>
            <Route path={`${baseUrl}/auth/check`} element={<Inicio />}></Route>
            <Route path="/inicio" element={<Navigate to={"/"} />}></Route>
            <Route path="/biografia" element={<SobreMi />}></Route>
            <Route path="/portafolio" element={<Portafolio />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
          </Routes>
          <Nav />
          <h1>Welcome {dataToken.username}</h1>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default Inicio;
