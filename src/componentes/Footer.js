/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../estilos/Footer.css";

export default function Footer() {
  return (
    <div id="footer">
      <div className="upfoot">
        <h1>Gracias por visitarme</h1>
        <h3>Hecha un vistazo a mis redes</h3>
      </div>
      <div className="downfoot">
        <div className="redes">
          <a href="https://www.linkedin.com/in/sebasti%C3%A1n-rastelli-854876253/" target="blank_">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://www.instagram.com/seba.rastelli/" target="_blank">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="https://twitter.com/RastelliSeba" target="_blank">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="https://github.com/sebarastelli" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
        <div className="copy">© 2022 Copyright: Sebastián Rastelli</div>
      </div>
    </div>
  );
}
