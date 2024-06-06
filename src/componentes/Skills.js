import "../estilos/Skills.css";
import html from "../img/html.png";
import css from "../img/css.png";
import git from "../img/git.png";
import js from "../img/js.png";
import bootstrap from "../img/bootstrap.png";
import reacti from "../img/react.png";
import npm from "../img/npm.png";
import React from "react";
import tail from "../img/tail.png"
import redux from "../img/redux.png"
import sequelize from "../img/sequelize.png"
import cypress from "../img/cypress.png"

export default function Skills() {
  return (
    <div className="w-100 skills" id="skills">
      <div className="row text-center p-2">
        <h1>Skills</h1>
      </div>
      <div className="container">
        <div className="row p-4">
          <div className="skill col p-2">
            <img src={html} alt="html5" width="80px" height="80px" />
            <p className="tech-name">HTML5</p>
          </div>
          <div className="skill col p-2">
            <img src={css} alt="css" width="80px" height="80px" />
            <p className="tech-name">CSS</p>
          </div>
          <div className="skill col p-2">
            <img src={git} alt="git" width="80px" height="80px" />
            <p className="tech-name">Git</p>
          </div>
          <div className="skill col p-2">
            <img src={npm} alt="git" width="80px" height="80px" />
            <p className="tech-name">NPM</p>
          </div>
          <div className="skill col p-2">
            <img src={js} alt="html5" width="80px" height="80px" />
            <p className="tech-name">JavaScript</p>
          </div>
          <div className="skill col p-2">
            <img src={bootstrap} alt="html5" width="80px" height="80px" />
            <p className="tech-name">Bootstrap</p>
          </div>
          <div className="skill col p-2">
            <img src={reacti} alt="html5" width="80px" height="80px" />
            <p className="tech-name">React</p>
          </div>
          <div className="skill col p-2">
            <img src={tail} alt="html5" width="80px" height="80px" />
            <p className="tech-name">Tailwind CSS</p>
          </div>
          <div className="skill col p-2">
            <img src={redux} alt="html5" width="80px" height="80px" />
            <p className="tech-name">Redux</p>
          </div>
          <div className="skill col p-2">
            <img src={sequelize} alt="html5" width="80px" height="80px" />
            <p className="tech-name">Sequelize</p>
          </div>
          <div className="skill col p-2">
            <img src={cypress} alt="html5" width="80px" height="80px" />
            <p className="tech-name">Cypress</p>
          </div>
        </div>
      </div>
    </div>
  );
}
