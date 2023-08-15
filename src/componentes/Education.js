import "../estilos/Education.css"
import coder from "../img/Coder.png"
import henry from "../img/henrytitulo.png"
import efset from "../img/EFSET.png"

export default function Education(){
    return(
        <div className="container" id="education">
            <div className="row text-center p-2">
                <h1>Certificados</h1>
            </div>
            <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <a target="_blank" href="https://certificates.soyhenry.com/new-cert?id=f12e4c054e909549ea4c5d74e60cdcf8c1d38786ae624bd857d35c7b74e545d9" className="cert card bg-dark bg-gradient">
                <img src={henry} className="card-img-top" alt="..." />
                </a>
                <h5 className="text-center text-light">Henry</h5>
             </div>   
             <div className="col">
                <a target="_blank" href="https://www.coderhouse.com/certificados/63581c8035f380000e9c6fa6" className="cert card bg-dark bg-gradient">
                <img src={coder} className="card-img-top" alt="..." />
                </a>
                <h5 className="text-center text-light">CoderHouse</h5>
                </div>
                <div className="col">
                <a target="_blank" href="https://www.efset.org/cert/xTCvZu" className="cert card bg-dark bg-gradient">
                <img src={efset} className="card-img-top" alt="..." />
                </a>
                <h5 className="text-center text-light">EFSET</h5>
                </div>
                </div>
            
            </div>
        </div>
    )
}