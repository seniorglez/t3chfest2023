import React, { useState } from 'react'
import '../style/border.css'


export function SubSelector(props){
    
    console.log(props.value)
    let subResourceList = []
    if (props.value == props.row){
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



export function Selector(){

    const extendList = () =>{
        console.log('counter +1')
    }

    const [distance, setDistance] = useState(0)
    const [resource, setResource] = useState(-1)
    const [clicked , setCLicked] = useState(false)
    const click = [clicked, setCLicked]

    return(
        <div className='border'>
            <p>Recurso</p>

            <div className='border' onClick={() => setResource(0)} >
                <p>Inmueble</p>
                <SubSelector value = {resource} row = {0}/>
            </div>

            <div className='border' onClick={() => setResource(1)} >
                <p>Vehiculo</p>
                <SubSelector value = {resource} row = {1}/>
            </div>

            <div className='border' onClick={() => setResource(2)}>
                <p>Maquinaria</p>
                <SubSelector value = {resource} row = {2} clicked={click}/>
            </div>

            

            <p>Distancia</p>
            <input type="range" value={distance} onChange={ev => setDistance(ev.target.value)}/> 
        </div>
    );
}
