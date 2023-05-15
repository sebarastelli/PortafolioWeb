import "../estilos/Contact.css";
import React from "react";


export default function Contact() {
  const sendMail = ()=>{
    window.location.href = "mailto:seba-rastelli@hotmail.com?subject=Oferta laboral";
  }

  return (
      <div id="contact">
        <h2 className="text-center py-5">Contactame</h2>
        <h6 className="subtitulo">Trabajemos juntos</h6>
        <div className="contenedor-boton">
        <button className="boton cinco" onClick={sendMail} formTarget="_blank">
				<div className="icono">
        <ion-icon name="mail-outline"></ion-icon>
				</div>
        <span>ENVIAR</span>
        </button>
        </div>
      </div>
  );
}
