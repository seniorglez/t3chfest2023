import React, { useState } from 'react'
import {Selector} from './selector';
import '../style/border.css'
import '../style/view1.css'

function View1(props) {
  
    const [distance, setDistance] = useState(0)
    const [text , setText] = useState("")
    return (
        <div>
            <p>Busca recursos</p>
            <div className='searchBar'>
                <input type="text" value={text} onChange={ev => setText(ev.target.value)} className='input'/> 
                <button className='searchBarButton' onClick={() => props.setState(2)}>Buscar</button>
            </div>
            <div className='distance'>
                <p className='distance_text'>Distancia</p>
                <input className='distance_input' type="range" value={distance} onChange={ev => setDistance(ev.target.value)}/> 
            </div>
            <Selector/>
            
        </div>
    );
}

export default View1;
