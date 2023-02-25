import React, { useState } from 'react'
import {Selector} from './selector';
import '../style/border.css'
import '../style/view1.css'

function View1() {
  

    const [distance, setDistance] = useState(0)
    const [text , setText] = useState("")
    return (
        <div>
            <div className='searchBar'>
                <p>Busca recursos</p>
                <input type="text" value={text} onChange={ev => setText(ev.target.value)} className='input'/> 
            </div>
            <Selector/>
            <div className='distance'>
                <p>Distancia</p>
                <input type="range" value={distance} onChange={ev => setDistance(ev.target.value)}/> 
            </div>
            <button>Buscar</button>
        </div>
    );
}

export default View1;
