import React, { useState } from 'react'
import {Selector} from './selector';
import '../style/border.css'

function View1() {

  const [text , setText] = useState("")
  return (
    <div>
        <p>Busca recursos</p>
        <input type="text" value={text} onChange={ev => setText(ev.target.value)}/> 
        <Selector/>
    </div>
  );
}

export default View1;
