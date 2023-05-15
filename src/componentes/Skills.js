import "../estilos/Skills.css";
import html from "../img/html.png";
import css from "../img/css.png";
import git from "../img/git.png";
import js from "../img/js.png";
import bootstrap from "../img/bootstrap.png";
import reacti from "../img/react.png";
import npm from "../img/npm.png";
import React from "react";

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
          </div>
          <div className="skill col p-2">
            <img src={css} alt="css" width="80px" height="80px" />
          </div>
          <div className="skill col p-2">
            <img src={git} alt="git" width="80px" height="80px" />
          </div>
          <div className="skill col p-2">
            <img src={npm} alt="git" width="80px" height="80px" />
          </div>
          <div className="skill col p-2">
            <img src={js} alt="html5" width="80px" height="80px" />
          </div>
          <div className="skill col p-2">
            <img src={bootstrap} alt="html5" width="80px" height="80px" />
          </div>
          <div className="skill col p-2">
            <img src={reacti} alt="html5" width="80px" height="80px" />
          </div>
        </div>
      </div>
    </div>
  );
}
