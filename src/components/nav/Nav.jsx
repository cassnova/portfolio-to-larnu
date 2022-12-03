import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import Logo from "../../larnu-logo.png";

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="">Logo</div>
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/sobremi">Sobre Mi</NavLink>
        </li>
        <li>
          <NavLink to="/portafolio">Portafolio</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
