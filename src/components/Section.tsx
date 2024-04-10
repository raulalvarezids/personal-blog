
type Item = {
    name: string,
    description:string
}

function Sectionn({name, description}: Item) {
    
    return ( 
        <div>

            <h1>{name}</h1>            
            <p>{description}</p>

        </div> 
    );
}

export default Sectionn;