import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Nav from "../components/nav/Nav";
import Bio from "../components/bio/Bio";
import Proyectos from "../components/proyectos/Proyectos";
import Footer from "../components/footer/Footer";
import Data from "../bd";
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
          // console.log(res);
        });
    }
    checkToken();
  }, [baseUrl, setChecked, setDataToken, token]);

  return (
    <>
      {checked ? (
        <div className="inicio-container">
          {/* <Routes>
            <Route path={`${baseUrl}/auth/check`} element={<Inicio />}></Route>
            <Route path="/inicio" element={<Inicio />}></Route>
            <Route path="/sobre-mi" element={<SobreMi />}></Route>
            <Route path="/portafolio" element={<Portafolio />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
          </Routes> */}
          <Nav />
          <Bio />
          <Proyectos data={Data} />
          <Footer />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default Inicio;
