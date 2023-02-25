import React, { useState } from 'react'
import '../style/mainSearchBar.css'



export function SubResources(props){
    
    console.log(props.value)
    let subResourceList = []
    if (props.value !== -1){
        subResourceList = ["c15" ,"quita Nieves" , "jamon"]
    }
    //subResourcesList = props.subResourceList(props.select)

    return(
 
    subResourceList.map( (subResource) =>
                <div>   
                    <p>{subResource}</p>
                    <input type="checkbox"/>
                </div>
    ) 

    )
}



export function FilterOptions(){
    const [distance, setDistance] = useState(0)
    const [resource, setResource] = useState(-1)
    return(
        <div className='mainSearchBar'>
            <p>Recurso</p>

            <div>
                <p>Inmueble</p>
                <input type="radio" name='resource' value= "1" onChange={ev => setResource(ev.target.value)}/>
            </div>

            <p>Vehiculo</p>
            <input type="radio" name="resource" value= "2" onChange={ev => setResource(ev.target.value)} />

            <p>Maquinaria</p>
            <input type="radio" name="resource" value= "3" onChange={ev => setResource(ev.target.value)} />

            <SubResources value = {resource} />

            <p>Distancia</p>
            <input type="range" value={distance} onChange={ev => setDistance(ev.target.value)}/> 
        </div>
    );
}
