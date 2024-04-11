import { Proyectos } from "../interface/proyecto";
import Pro from "./Pro";
import '../assets/css/proyects.css'

interface ProyectProps{
    proyectos:Proyectos[]
}

function Projects({proyectos} :ProyectProps) {
  
    return (         

        <div className="container " id="projects">
            <h1 className="All__title">Proyectos</h1>

            <div className="reco__container">
                <h3 className="reco__tittle">Recomendaciones: </h3>
                <p className="reco__parrafo">
                    El backend está en un servidor gratuito, así que se pausa después de cierto tiempo de inactividad, si cuando ingresa a alguno de los proyectos no reacciona ante las peticiones, por favor de esperar un minuto o dos tras la primera petición para que el servidor encienda y reacciones, gracias. 
                </p>
            </div>
            


                        
            <div className="proyectos__all__container"> 
            
            {
                proyectos.map(pr => <Pro key={pr.name} name={pr.name} descripcion={pr.descripcion} img={pr.img} tecnologias={pr.tecnologias} url={pr.url} front={pr.front} back={pr.back}/>)
            }     

            </div>

        </div>

     );
}

export default Projects;