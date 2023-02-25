import React from 'react'
import '../style/border.css'
import '../style/view2.css'


export function Cell(props){
    return(
        <div className='cell'>
            <h1 className='tittle'>{props.resource.name}</h1>
            <div className='content'>
                <p>{"Desc: " + String(props.resource.description)}</p>
                <p>{"Distancia: " + String(props.resource.distance)}</p>
            </div>
        </div>
    );
}


export function MainList(){

    const resourceOBJ = {
        name : "c15",
        description : "Puta madre",
       distance : "5km"
    }

    let resourceList = [resourceOBJ, resourceOBJ, resourceOBJ]

    return(
        <div className='mainList'>
            {
                resourceList.map( (resource) => <Cell resource = {resource}/>)
            }
        </div>
    );
}

