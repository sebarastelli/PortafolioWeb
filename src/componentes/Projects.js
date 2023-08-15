/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../estilos/Projects.css";
import vgApp from "../img/AppVG.png";
import carro from "../img/nomad.PNG";
import cine from "../img/cine.PNG";
import rymPI from "../img/rymPI.png";
import web from "../img/terra.PNG";
import trailers from "../img/AppPeliculas.PNG"
import React, { useState } from "react";


export default function Projects() {

  const projectData = [
    {
      name: "Pág web",
      image: web,
      description:
        "Página web de distribución: Proyecto personal de desarrollo web utilizando HTML y CSS para una empresa de distribución. Diseño intuitivo y moderno, destacando productos y servicios, y facilitando pedidos y contacto con el cliente.",
      websiteLink: "https://terradist.000webhostapp.com/",
      githubLink:
        "https://github.com/sebarastelli/Proyecto-Final-Sebastian-Rastelli",
    },
    {
      name: "Simulador de boletería",
      image: cine,
      description:
        "Simulador de boletería de cine: Proyecto desarrollado durante el curso en Coderhouse, utilizando HTML, CSS, JavaScript y Bootstrap. Una herramienta interactiva que permite al usuario seleccionar películas y cantidad de tickets, brindando una experiencia fácil de usar para comprar boletos de cine.",
      websiteLink: "https://boleteriacine.netlify.app/",
      githubLink:
        "https://github.com/sebarastelli/Proyecto-Final-Sebastian-Rastelli",
    },
    {
      name: "App de Videojuegos",
      image: vgApp,
      description:
        "Aplicación de búsqueda de cartas de videojuegos: Un emocionante proyecto con desarrollo front-end y back-end. Utilizando tecnologías como Vite, Redux y CSS para el front-end y una API para obtener las cartas de videojuegos. Los usuarios pueden explorar y buscar cartas de diferentes videojuegos, y además tienen la capacidad de crear cartas personalizadas para sus propios juegos.",
      websiteLink: "https://videogamesapp-sr.netlify.app/", // Agrega el enlace correcto si es necesario
      githubLink: "https://github.com/sebarastelli/VideoGameApp", // Agrega el enlace correcto si es necesario
    },
    {
      name: "Proyecto Rick and Morty",
      image: rymPI,
      description:
        "Explora una divertida aplicación desarrollada utilizando React para la interfaz de usuario receptiva y atractiva, potenciada con CSS para un diseño elegante. Esta aplicación utiliza Express como servidor backend, junto con Sequelize para gestionar la base de datos. Sumérgete en el emocionante mundo de Rick y Morty mientras exploras una amplia gama de personajes de la serie. ¡Guarda tus personajes favoritos con facilidad y revívelos cuando quieras en esta emocionante aventura de desarrollo!",
      websiteLink: "https://rymsebarastelli-pi.netlify.app/", // Agrega el enlace correcto si es necesario
      githubLink: "https://github.com/sebarastelli/rick-y-morty-integrador", // Agrega el enlace correcto si es necesario
    },
    {
      name: "NomadLocals",
      image: carro,
      description:
        "Con un stack tecnológico de vanguardia que incluye React y Tailwind CSS para una interfaz moderna y atractiva, Redux para una gestión de estado eficiente, y Express y Node.js para un backend robusto respaldado por Sequelize. ¿Quieres unirte a un emocionante partido de fútbol o una relajante caminata? Nuestra aplicación utiliza React Leaflet para la geolocalización, lo que te permite encontrar eventos cercanos fácilmente. ¡Pero eso no es todo! Con Socket.IO, también puedes disfrutar de un chat en tiempo real para una comunicación fluida. Este proyecto emocionante no solo destaca por su tecnología de punta, sino que también es un encargo real de una empresa.",
      websiteLink: "https://nomandlocals.netlify.app/", // Agrega el enlace correcto si es necesario
      githubLink: "https://github.com/NomadLocals/front", // Agrega el enlace correcto si es necesario
    },
    {
      name: "Buscador de Trailers",
      image: trailers,
      description:
        "Descubre la emoción del cine con nuestra aplicación de búsqueda de trailers de películas, impulsada por la velocidad de Vite y la potencia de las solicitudes de API. Encuentra fácilmente los avances de tus películas favoritas en cuestión de segundos. Gracias a la eficiencia de Vite, la interfaz es increíblemente rápida y fluida. La aplicación realiza solicitudes de API para obtener los últimos trailers directamente desde la fuente, lo que te mantiene actualizado con las últimas novedades cinematográficas.",
      websiteLink: "https://buscadordetrailers.netlify.app/", // Agrega el enlace correcto si es necesario
      githubLink: "https://github.com/sebarastelli/Api-Peliculas", // Agrega el enlace correcto si es necesario
    },
  ];

  const initialProjectState = projectData.map(()=> false)
  const [showDetail, setShowDetail] = useState(initialProjectState);

  const handleShowDetail = (index) => {
    setShowDetail((prevShowDetail) => {
      const newShowDetail = [...prevShowDetail];
      newShowDetail[index] = !newShowDetail[index];
      return newShowDetail;
    });
  };

  return (
    <div className="container" id="projects">
      <div className="row text-center p-2">
        <h1>Proyectos</h1>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {projectData.map((project, index) => (
            <div className="col" key={index}>
              <div className="card bg-dark bg-gradient">
                <img src={project.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  {showDetail[index] ? (
                    <p className="card-text">{project.description}</p>
                  ) : null}
                  
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => handleShowDetail(index)}
                  >
                    {showDetail[index] ? "Ocultar detalle" : "Mostrar detalle"}
                  </button>
                  <a
                    className="btn"
                    target="_blank"
                    type="button"
                    href={project.websiteLink}
                    rel="noreferrer"
                  >
                    <ion-icon name="globe-outline"></ion-icon>
                  </a>
                  <a
                    className="btn"
                    target="_blank"
                    type="button"
                    href={project.githubLink}
                    rel="noreferrer"
                  >
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
