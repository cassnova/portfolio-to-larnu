import React from "react";
import FotoPerfil from "../../foto-perfil.jpg";
import "./Bio.css";

const Bio = () => {
  return (
    <div className="bio-container">
      <div className="bio-container__foto">
        <img src={FotoPerfil} alt="Foto Perfil" />
      </div>
      <p>
        ¡Hola! Mi nombre es Daniel Rojas Casanova, actualmente vivo en la ciudad
        de Viña del Mar, Quinta Región de Chile y soy Desarrollador web
        front-end.
      </p>
      <p>
        Me apasiona la tecnología, la innovación y desarrollar proyectos de
        forma creativa. Para ello, utilizo distintas herramientas que son muy
        solicitadas en el campo TI.
      </p>
      <p>
        Disfruto trabajar en equipo, ya sea con clientes y asociados, o bien
        siendo parte de una empresa.
      </p>
      <p>
        Creo que es fundamental el diálogo, apreciar cada punto de vista,
        potenciar las fortalezas de cada integrante y agrupar los conceptos
        recogidos para desarrollar una gran idea que culmine en proyectos
        exitosos.
      </p>
    </div>
  );
};

export default Bio;
