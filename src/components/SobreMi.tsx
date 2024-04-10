import '../assets/css/about.css'
import foto from '../assets/images/foto.jpg'
import linke from '../assets/images/linkedin.png'

import git2 from '../assets/images/github.svg'

import tel from '../assets/images/phoni.svg'
import email from '../assets/images/gmail.png'

import {CopyToClipboard} from 'react-copy-to-clipboard'

import toast , {Toaster} from 'react-hot-toast'

function SobreMi() {

    const sendMessage = () =>{
        toast.success("Copied successfully",{duration:1300})
    }


    return (  
        <div className="about__container " id='aboutMe'>
            
            <Toaster
                    position="top-center"
                    reverseOrder={false}            
            />

            
           

            <div className='about__title css-selector'>
                <h1>Hola Soy Raul Alvarez</h1>
                <h1>Software Developer</h1>
            </div>

            <img src={foto} alt="" className='maing__pic'/>

            <div className='icons__container'>
                  
                <CopyToClipboard  text='9671918530'>
                    <img src={tel} alt="" className='icon__item as' onClick={() => sendMessage()}/>
                </CopyToClipboard>
                
                <CopyToClipboard  text='raul.alvarezids@gmail.com'>
                    <img src={email} alt="" className='icon__item as' onClick={() => sendMessage()}/>
                </CopyToClipboard>               

                <a href="https://github.com/raulalvarezids" target='_blank'><img src={git2} alt="" className='icon__item'/></a>
                <a href="https://www.linkedin.com/in/raul-alejandro-alvarez-calvo-0b9425220/" target='_blank' ><img src={linke} alt="" className='icon__item'/></a>

            </div>
            
            <p className='parrafo__about'>
                Egresado en Ingeniería en Software, con experiencia en el desarrollo de bases de datos, backend y frontend. Sólida
                comprensión de los principios fundamentales de la ingeniería de software y
                la capacidad para aplicarlos en entornos prácticos.
            </p>
        </div>
    );
}

export default SobreMi;