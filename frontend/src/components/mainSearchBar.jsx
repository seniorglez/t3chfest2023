import React, { useState } from 'react'
import '../style/mainSearchBar.css'


function MainSearchBar(){
    const [text , setText] = useState("")
    return(
        <div className='mainSearchBar'>
            <p>Busca recursos</p>
            <input type="text" value={text} onChange={ev => setText(ev.target.value)}/> 
        </div>
    );
}


export default MainSearchBar