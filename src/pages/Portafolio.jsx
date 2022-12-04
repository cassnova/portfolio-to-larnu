import React from "react";
import "./styles/Portafolio.css";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Proyectos from "../components/proyectos/Proyectos";
import Data from "../bd";

const Portafolio = () => {
  return (
    <div className="portafolio-container">
      <Nav />
      <h2>Portafolio</h2>
      <Proyectos data={Data} />
      <Footer />
    </div>
  );
};

export default Portafolio;
