import React, { useState } from 'react'
import '../style/border.css'
import '../style/view1.css'


export function SubSelector(props){
    
    console.log(props.value)
    let subResourceList = []
    if (props.value === props.row){
        subResourceList = ["c15" ,"quita Nieves" , "jamon"]
    }

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

    const [resource, setResource] = useState(-1)
    const [clicked , setCLicked] = useState(false)
    const click = [clicked, setCLicked]

    return(
        <div className='selector'>
                <div className='button' onClick={() => setResource(0)} >
                    <p>Inmueble</p>
                    <SubSelector value = {resource} row = {0}/>
                </div>

                <div className='button' onClick={() => setResource(1)} >
                    <p>Vehiculo</p>
                    <SubSelector value = {resource} row = {1}/>
                </div>

                <div className='button' onClick={() => setResource(2)}>
                    <p>Maquinaria</p>
                    <SubSelector value = {resource} row = {2} clicked={click}/>
                </div>
        </div>
    );
}
