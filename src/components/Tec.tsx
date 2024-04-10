
import { useState } from "react";
import { Tecnoloy } from "../interface/proyecto";

function Tec({img,name} : Tecnoloy) {

    const [mostrarTexto, setMostrarTexto] = useState<boolean>(false);
    
    const handleShow = (show : boolean) => {                
        if (window.innerWidth > 724) {
            setMostrarTexto(show);
        }
    }
    
    return ( 
        
        <div className="contenedor">
            <img 
                src={img} 
                alt="Imagen"                         
                onMouseEnter={() => handleShow(true)} 
                onMouseLeave={() => handleShow(false)} 
                className='img__pro'
            />
            {mostrarTexto && <p className= "texto">{name}</p>  }
        </div>

     );
}

export default Tec;