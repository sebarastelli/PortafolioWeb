/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../estilos/Projects.css";
import vgApp from "../img/AppVG.png";
import carro from "../img/nomad.PNG";
import cine from "../img/cine.PNG";
import pokedex from "../img/pokedex.png";
import clubes from "../img/clubes.png";
import trailers from "../img/AppPeliculas.PNG"
import React, { useState } from "react";


export default function Projects() {

  const projectData = [
    {
      name: "Football CRUD",
      image: clubes,
      description:
        "Esta es una aplicación web desarrollada utilizando Node.js y Express para el backend, y JavaScript, HTML y Bootstrap para el frontend. La aplicación proporciona funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar equipos de fútbol.",
      githubLink:
        "https://github.com/sebarastelli/crudClubes",
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
      websiteLink: "https://videogamesapp-sr.netlify.app/", 
      githubLink: "https://github.com/sebarastelli/VideoGameApp",
    },
    {
      name: "Pokedex",
      image: pokedex,
      description:
        "Este proyecto consiste en una Pokedex interactiva desarrollada con JavaScript, que permite a los usuarios explorar y conocer más sobre los diferentes Pokémon. La aplicación cuenta con paginación para una navegación fácil y eficiente, y permite a los usuarios hacer clic en los Pokémon para ver sus estadísticas detalladas. El proyecto incluye pruebas unitarias realizadas con Jest y pruebas de integración y end-to-end con Cypress para asegurar la calidad y funcionalidad del producto.",
      githubLink: "https://github.com/sebarastelli/pokedex", 
    },
    {
      name: "NomadLocals",
      image: carro,
      description:
        "Con un stack tecnológico de vanguardia que incluye React y Tailwind CSS para una interfaz moderna y atractiva, Redux para una gestión de estado eficiente, y Express y Node.js para un backend robusto respaldado por Sequelize. ¿Quieres unirte a un emocionante partido de fútbol o una relajante caminata? Nuestra aplicación utiliza React Leaflet para la geolocalización, lo que te permite encontrar eventos cercanos fácilmente. ¡Pero eso no es todo! Con Socket.IO, también puedes disfrutar de un chat en tiempo real para una comunicación fluida. Este proyecto emocionante no solo destaca por su tecnología de punta, sino que también es un encargo real de una empresa.",
      websiteLink: "https://nomandlocals.netlify.app/", 
      githubLink: "https://github.com/NomadLocals/front", 
    },
    {
      name: "Buscador de Trailers",
      image: trailers,
      description:
        "Descubre la emoción del cine con nuestra aplicación de búsqueda de trailers de películas, impulsada por la velocidad de Vite y la potencia de las solicitudes de API. Encuentra fácilmente los avances de tus películas favoritas en cuestión de segundos. Gracias a la eficiencia de Vite, la interfaz es increíblemente rápida y fluida. La aplicación realiza solicitudes de API para obtener los últimos trailers directamente desde la fuente, lo que te mantiene actualizado con las últimas novedades cinematográficas.",
      websiteLink: "https://buscadordetrailers.netlify.app/", 
      githubLink: "https://github.com/sebarastelli/Api-Peliculas", 
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
