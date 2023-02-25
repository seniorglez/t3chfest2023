import React from 'react'
import '../style/border.css'


export function Cell(props){
    return(
        <div className='border'>
            <p>[image]</p>
            <h1>{props.resource.name}</h1>
            <p>{props.resource.description}</p>
        </div>
    );
}


export function MainList(){

    const resourceOBJ = {
        name : "c15",
        description : "Puta madre",
        image : "[image]"
    }

    let resourceList = [resourceOBJ, resourceOBJ, resourceOBJ]

    return(
        <div className='border'>
            <p>RESULTADOS</p>
            {
                resourceList.map( (resource) => <Cell resource = {resource}/>)
            }
        </div>
    );
}

