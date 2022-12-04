import React from "react";
import Bio from "../components/bio/Bio";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import "./styles/SobreMi.css";

const SobreMi = () => {
  return (
    <div className="sobremi-container">
      <Nav />
      <h2>Sobre mi</h2>
      <Bio />
      <Footer />
    </div>
  );
};

export default SobreMi;
