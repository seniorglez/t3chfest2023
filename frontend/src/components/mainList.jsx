import React from 'react'
import '../style/border.css'
import '../style/view2.css'




export function Cell(props){
    console.log(props.resource.name)
    return(
        <div className='cell' onClick={() => props.setStep(3)}>
            <h1 className='tittle'>{props.resource.name}</h1>
            <div className='content'>
                <p className='content_desc'>{ String(props.resource.observations)}</p>
                <p>{"Coordenadas: " + String(props.resource.cords)}</p>
            </div>
        </div>
    );
}


export function MainList(props){

    let resourceList = props.data

    return(
        <div className='mainList'>

            {   
                resourceList.map( (resource) => <Cell resource = {resource} setStep={props.setStep}/>)
            }
        </div>
    );
}

