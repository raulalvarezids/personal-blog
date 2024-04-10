import '../assets/css/pro.css'
import { Proyectos } from '../interface/proyecto';
import Tec from './Tec';
import gith from '../assets/images/github.svg'


function Pro({name,descripcion,img,tecnologias,url,back,front}:Proyectos) {
    
    
    return (
        <div className='pro__contianer'>            

                <h1 className='title__pro'>{name}</h1>

                <a href={url} target="_blank"><img src={img} alt=""  className='main__img'/></a>
                
                <div className='tec__container'>
                    {
                        tecnologias.map(t => <Tec key={t.name} name={t.name} img={t.img}/>)
                    }
                </div>

                <div className='conatiner__gits'>

                    
                    <a href={front} target="_blank"><img src={gith} alt=""  className='img__pro plis'/></a>
                    <a href={back} target="_blank"><img src={gith} alt="" className='img__pro plis'/></a>

                </div>
                

                <p className='parrafo__pro'>{descripcion}</p>



        </div>
      );
}

export default Pro;