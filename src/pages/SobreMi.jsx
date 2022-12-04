import React from "react";
import Bio from "../components/bio/Bio";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import "./styles/SobreMi.css";

const SobreMi = () => {
  return (
    <div className="sobremi-container">
      <Nav />
      <Bio />
      <Footer />
    </div>
  );
};

export default SobreMi;
