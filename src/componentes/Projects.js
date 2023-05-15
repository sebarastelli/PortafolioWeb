import "../estilos/Projects.css";
import rapp from "../img/rapp.jpg";
import carro from "../img/carro.jpg";
import cine from "../img/cine.jpg";
import javas from "../img/javas.jpg";
import web from "../img/web.jpg";
import React from "react";

export default function Projects() {
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
                <p className="card-text">
                  Página Web para empresa desarrollada con HTML Y CSS
                </p>
                <a
                  className="btn"
                  target="_blank"
                  type="button"
                  href="https://terradist.000webhostapp.com/"
                >
                  <ion-icon name="globe-outline"></ion-icon>
                </a>
                <a className="btn" target="_blank" type="button">
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
                  Simulador de boletería de cine creado como proyecto final del
                  curso de CoderHouse.
                </p>
                <a
                  className="btn"
                  target="_blank"
                  type="button"
                  href="https://boleteriacine.netlify.app/"
                >
                  <ion-icon name="globe-outline"></ion-icon>
                </a>
                <a className="btn btn-primary" href="https://github.com/sebarastelli/Proyecto-Final-Sebastian-Rastelli" target="_blank" type="button">
                <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark bg-gradient">
              <img src={rapp} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Apps con React</h5>
                <p className="card-text">
                  Lista de apps simples creadas usando React del curso
                  freeCodeCamp.
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
