import "../estilos/About.css";
import perfilImg from "../img/Perfil.jpg";
import React from "react";
import resumePDF from "../img/CV.pdf"

export default function About() {
  return (
    <div id="about">
      <div className="contenido-banner">
        <div className="contenedor-img">
          <img src={perfilImg} alt="" />
        </div>
        <h3>Front-End Developer</h3>
        <p>"Con 26 años de edad y más de un año de experiencia en programación, he cultivado una pasión inquebrantable por el desarrollo de aplicaciones web. Mi enfoque se ha centrado principalmente en el área del desarrollo front-end con algunos conocimientos del back-end.
"</p>
      <a href={resumePDF} download="CV.pdf" className="btn-descargar">⬇ CV</a>
      </div>
    </div>
  );
}
