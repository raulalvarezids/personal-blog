import '../assets/css/Nav.css'
import cerrar from '../assets/images/x.png'
import ham from '../assets/images/menu.png'
import { useState } from 'react';


function Nav() {

    const [show, setShow] = useState<Boolean>(false)

    const handleShow = () => {
        if (window.innerWidth < 768) {
            setShow((sh ) => !sh)
        }
    }
    
    const handleDescargarPDF = () => {        
        const pdfUrl = `/Raul_alvarez_cv.pdf`;        
        window.open(pdfUrl);
    };



    return (  
        <header className='header'>

            <nav className='nav__header'>

                <div className='content__container'>
                    <h1 className='title__nav'>Raul Alvarez</h1>    

                    <img src={ham} alt=""   className={!show ? 'icon__nav' : 'diapear'}  onClick={() => handleShow()}/>
                    <img src={cerrar} alt=""  className={show ? 'icon__nav' : 'diapear'}  onClick={() => handleShow()}/>                    

                </div>
                                
                <ul className={show ? 'ul__container' : 'diapeartwo'}>
                    <li className='ul__item'><a href="#aboutMe" onClick={() => handleShow()}>Sobre mi</a></li>
                    <li className='ul__item'><a href="#projects" onClick={() => handleShow()}>Proyectos</a></li>
                    <li className='ul__item'><a href="#skills" onClick={() => handleShow()}>Skills</a></li>
                    <li className='ul__item'><a href="#softSkills" onClick={() => handleShow()}>Soft Skills</a></li>
                    <li className='ul__item'><a href="#education" onClick={() => handleShow()}>Educacion</a></li>
                    <li className='ul__item' onClick={handleDescargarPDF} >Descargar cv</li>
                </ul> 


            </nav> 

        </header>

    );
}

export default Nav;