import '../assets/css/skills.css'
import { Tecnoloy } from '../interface/proyecto';
import Tec from './Tec';

interface DataProps {
    data : Tecnoloy[]
}

function Skills({data}: DataProps) {

    return (  
        <div   className="container "  id="skills">
             <h1 className="All__title ssds">Skills</h1>
            
                <div className="skills__contianer">                                      
                    
                     {
                        data.map((e) => <Tec name={e.name} key={e.name} img={e.img}/>)
                    } 
                </div>
                            

        </div>
    );
}

export default Skills;