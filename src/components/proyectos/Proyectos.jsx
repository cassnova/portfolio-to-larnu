import React from "react";
import "./Proyectos.css";

const Proyectos = ({ data }) => {
  return (
    <>
      {data.map((e, i) => {
        return (
          <div className="card-container" key={i}>
            <div className="img-container">
              <img src={e.photo} alt={e.title} />
            </div>

            <div className="description-container">
              <p>{e.description}</p>
              <div className="btn-container">
                <a className="btn-webs" target="__blank" href={e.link}>
                  VISITAR
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Proyectos;
