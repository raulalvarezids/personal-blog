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
                        
            <div className="proyectos__all__container">
            
            {
                proyectos.map(pr => <Pro key={pr.name} name={pr.name} descripcion={pr.descripcion} img={pr.img} tecnologias={pr.tecnologias} url={pr.url} front={pr.front} back={pr.back}/>)
            }     

            </div>

        </div>

     );
}

export default Projects;