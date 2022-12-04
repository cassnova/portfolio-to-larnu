import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Nav.css";
import Logo from "../../larnu-logo.png";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className="nav-container">
      <NavLink to="/">
        <img src={Logo} alt="Logo LarnU" className="logo" />
      </NavLink>
      <div>
        <ul className={clicked ? "active" : null}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/sobre-mi">Sobre Mi</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>

      <div id="mobile">
        <i
          id="bar"
          className={`fas fa-bars ${clicked ? "fas fa-times" : "fas fa-bars"}`}
          onClick={() => setClicked(!clicked)}
        ></i>
      </div>
    </nav>
  );
};

export default Nav;
