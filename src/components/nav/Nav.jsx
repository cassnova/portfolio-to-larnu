import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import Logo from "../../larnu-logo.png";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "var(--tertiary)" : "",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <nav className="nav-container">
      <NavLink to="/">
        <img src={Logo} alt="Logo LarnU" className="logo" />
      </NavLink>

      <ul className={clicked ? "active" : null}>
        <li>
          <NavLink style={navLinkStyles} to="/">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyles} to="/sobre-mi">
            Sobre Mi
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyles} to="/portafolio">
            Portafolio
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyles} to="/contacto">
            Contacto
          </NavLink>
        </li>
      </ul>

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
