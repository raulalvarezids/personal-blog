import '../assets/css/home.css'
import Nav from '../components/Nav';
import SobreMi from '../components/SobreMi';

import gym from '../assets/images/gym.png'
import Projects from '../components/Projects';


import node from '../assets/images/node.png'
import rc from '../assets/images/react.png'
import js from '../assets/images/javas.png'
import pos from '../assets/images/pos.png'
import redu from '../assets/images/redu.png'
import mongo from '../assets/images/mongo.png'
import expe from '../assets/images/express.svg'
import ts from '../assets/images/ts.png'
import cs from '../assets/images/cs.png'
import py from '../assets/images/py.png'
import java from '../assets/images/java.png'
import dj from '../assets/images/djangito.png'
import htm from '../assets/images/ht.png'
import boost from '../assets/images/bos.png'
import docker from '../assets/images/do.png'
import mys from '../assets/images/my.png'
import fig from '../assets/images/fg.png'
import vue from '../assets/images/vue.png'
import nest from '../assets/images/nestjs.png'

import furl from '../assets/images/furl.png'
import ex from '../assets/images/muscle.png'
import { Proyectos, Tecnoloy } from '../interface/proyecto';
import Skills from '../components/Skills';
import SoftSkills from '../components/SoftSkills';
import Education from '../components/Education';
import todoPic from '../assets/images/nestPic.png'


const projects : Proyectos[]  = [
    {
        name:'Url Shortener',
        descripcion:'Es una pagina sobre free Url shortener en el cual se coloca una url larga y se transforma en una short-url.',
        img:furl,        
        tecnologias:[{img:node,name:'Node js'}, {img:expe,name:'Express'},{img:rc,name:'React js'}, {img:js,name:'Javascript'},{img:mongo,name:'Mongodb'} ,{img:redu,name:'Redux'}],
        url:'https://free-url-shortener-personal.netlify.app',
        front:'https://github.com/raulalvarezids/url-shortener-front',
        back:'https://github.com/raulalvarezids/url-shortener-api'
    },
    {
        name:'Todo App',
        descripcion:'Es una página de tareas, hay tareas volátiles y permanentes iniciando sesión. backend hecho con Nest js.',
        img:todoPic,
        tecnologias:[{img:node,name:'Node js'},{img:nest,name:'Nest Js'}, {img:vue,name:'Vue js'},{img:ts,name:'Typescript'},{img:mongo,name:'Mongodb'}],
        url:'https://todonewappracz.netlify.app',
        front:'https://github.com/raulalvarezids/todo-front',
        back:'https://github.com/raulalvarezids/todo-api'
    },
    {
        name:'Muslce Exercises React',
        descripcion:'Muestra músculos del cuerpo y ejercicios que puedes realizar para entrenar cada uno de ellos. Hecho con React',
        img:ex,        
        tecnologias:[{img:rc,name:'React js'}, {img:ts,name:'Typescript'}],
        url:'https://exercise-blog.netlify.app/',
        front:'https://github.com/raulalvarezids/exercises-blog',
        back:null
    },
    {
        name:'Muslce Exercises Vue js',
        descripcion:'Muestra músculos del cuerpo y ejercicios que puedes realizar para entrenar cada uno de ellos. Hecho con Vue js',
        img:ex,        
        tecnologias:[{img:vue,name:'Vue js'}, {img:ts,name:'Typescript'}],
        url:'https://exercise-vue-blog.netlify.app',
        front:'https://github.com/raulalvarezids/exercises-blog-vue',
        back:null
    },
    {
        name:'Gym Blgo',
        descripcion:'Es una página con temática de gimnasio en la cual se pueden visualizar rutinas, culturistas e información relevante sobre las calorías.',
        img:gym,
        tecnologias:[{img:node,name:'Node js'},{img:expe,name:'Express'}, {img:rc,name:'React js'}, {img:js,name:'Javascript'},{img:pos,name:'Postgresql'},{img:redu,name:'Redux'}],
        url:'https://personal-gym-blog.netlify.app',
        front:'https://github.com/raulalvarezids/gym-front',
        back:'https://github.com/raulalvarezids/gym-api'
    },
    
   
]

const ssk : Tecnoloy[] = [
    {img:rc,name:'React js'},
    {img:js, name:'Javascript'},
    {img:cs,name:'CSS'},
    {img:htm,name:'HTML'},
    {img:mongo,name:'MongoDB'},
    {img:redu,name:'Redux'},
    {img:node,name:'Node js'},
    {img:expe,name:'Express'},
    {img:pos,name:'PostgreSQL'},
    {img:ts,name:'typescript'},
    {img:py,name:'Python'},
    {img:dj,name:'Django'},
    {img:java,name:'Java'},
    {img:boost,name:'Bootstrap'},
    {img:docker,name:'Docker'},
    {img:mys,name:'MySql'},
    {img:fig,name:'Figma'},
    {img:vue,name:'Vue js'},
    {img:nest,name:'Nest Js'}
]

function Home() {

    return (  
        <>
          <Nav/>         
        <div className="home__page">                         
            <SobreMi/>
            <Projects  proyectos={projects} />
            <Skills data={ssk}/>
            <SoftSkills/>
            <Education/>
            
        </div>
        </>
        
    );
}




export default Home;