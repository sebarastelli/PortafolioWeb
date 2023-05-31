import "../estilos/About.css";
import perfilImg from "../img/Perfil.jpg";
import React from "react";

export default function About() {
  return (
    <div id="about">
      <div className="contenido-banner">
        <div className="contenedor-img">
          <img src={perfilImg} alt="" />
        </div>
        <h3>Trainee Front-End Developer</h3>
        <p>"Me llamo Sebastián Rastelli, tengo 25 años y estoy estudiando y practicando para ser desarrollador"</p>
      </div>
    </div>
  );
}
