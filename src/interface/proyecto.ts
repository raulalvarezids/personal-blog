export interface Tecnoloy {
    img:string,
    name:string
}


export interface Proyectos  {
    name:string,
    descripcion:string,
    img:string,
    tecnologias: Tecnoloy[],
    url:string,
    front:string,
    back:string
}
