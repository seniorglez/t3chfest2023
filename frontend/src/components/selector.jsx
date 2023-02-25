import React, { useState } from 'react'
import '../style/border.css'
import '../style/view1.css'


export function SubSelector(props){
    
    console.log(props.value)
    let subResourceList = []
    if (props.value === 1 ){
        subResourceList = ["4x4" , "furgonetas"]

    }else if(props.value === 0 ){
        subResourceList = ["Habitaciones" , "Pisos"]

    }else if(props.value === 2){
        subResourceList = ["Drones"]
    }

    return(
 
    subResourceList.map( (subResource) =>
        <div className='subSelectorChoice'>     
            <input type="checkbox"/>
            <p>{subResource}</p>
        </div>
    ) 

    )
}



export function Selector(){

    const [resource, setResource] = useState(-1)
    const [clicked , setClicked] = useState(false)
    const [actual, setActual] = useState(false)

    function updateSelector(choice){
        
        setClicked(!clicked)
        if (actual !== choice){
            setResource(choice)
            setActual(choice)
        }else{
            if (!clicked){
                setResource(choice)
            }else{
                setResource(-1)
            }
        }
        
        
    }

    return(
        <div>
            <div className='selector'>
                    <div className='button' onClick={() => updateSelector(0)} >
                        <p>Inmueble</p>
                    </div>

                    <div className='button' onClick={() => updateSelector(1)} >
                        <p>Vehiculo</p>
                    </div>

                    <div className='button' onClick={() => updateSelector(2)}>
                        <p>Maquinaria</p>
                    </div>
            </div>
            <div className={'subSelector'+String(actual)} >
                <SubSelector  value = {resource}/>
            </div>
        </div>
    );
}
