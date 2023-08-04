/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../estilos/Projects.css";
import rapp from "../img/rapp.jpg";
import carro from "../img/carro.jpg";
import cine from "../img/cine.jpg";
import javas from "../img/javas.jpg";
import web from "../img/web.jpg";
import React, { useState } from "react";


export default function Projects() {

  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="container" id="projects">
      <div className="row text-center p-2">
        <h1>Proyectos</h1>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card bg-dark bg-gradient">
              <img src={web} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pág web</h5>
                {showDetail ? (
                  <p className="card-text">
                    "Página web de distribución: Proyecto personal de desarrollo web utilizando HTML y CSS para una empresa de distribución. Diseño intuitivo y moderno, destacando productos y servicios, y facilitando pedidos y contacto con el cliente."
                  </p>
                ) : null}
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => setShowDetail(!showDetail)}
                >
                  {showDetail ? "Ocultar detalle" : "Mostrar detalle"}
                </button>
                <a
                  className="btn"
                  target="_blank"
                  type="button"
                  href="https://terradist.000webhostapp.com/"
                  rel="noreferrer"
                >
                  <ion-icon name="globe-outline"></ion-icon>
                </a>
                <a
                  className="btn"
                  target="_blank"
                  type="button"
                  href="https://github.com/sebarastelli/Proyecto-Final-Sebastian-Rastelli"
                  rel="noreferrer"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark bg-gradient">
              <img src={cine} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Simulador de boletería</h5>
                <p className="card-text">
                "Simulador de boletería de cine: Proyecto desarrollado durante el curso en Coderhouse, utilizando HTML, CSS, JavaScript y Bootstrap. Una herramienta interactiva que permite al usuario seleccionar películas y cantidad de tickets, brindando una experiencia fácil de usar para comprar boletos de cine."
                </p>
                <a
                  className="btn"
                  target="_blank"
                  type="button"
                  href="https://boleteriacine.netlify.app/" rel="noreferrer"
                >
                  <ion-icon name="globe-outline"></ion-icon>
                </a>
                <a className="btn btn-primary" href="https://github.com/sebarastelli/Proyecto-Final-Sebastian-Rastelli" target="_blank" type="button" rel="noreferrer">
                <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark bg-gradient">
              <img src={rapp} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">App de Videojuegos</h5>
                <p className="card-text">
                "Aplicación de búsqueda de cartas de videojuegos: Un emocionante proyecto con desarrollo front-end y back-end. Utilizando tecnologías como Vite, Redux y CSS para el front-end y una API para obtener las cartas de videojuegos. Los usuarios pueden explorar y buscar cartas de diferentes videojuegos, y además tienen la capacidad de crear cartas personalizadas para sus propios juegos."
                </p>
                <a className="btn btn-primary" target="_blank" type="button">
                <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark bg-gradient">
              <img src={javas} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Apps con Js</h5>
                <p className="card-text">Apps creadas en JS.</p>
                <a className="btn btn-primary" target="_blank" type="button">
                <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark bg-gradient">
              <img src={carro} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">E-commerce</h5>
                <p className="card-text">E-commerce creado con React.</p>
                <a className="btn btn-primary" target="_blank" type="button">
                <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
