
import './App.css';
import View1 from './components/View1';
import View2 from './components/View2';
import View3 from './components/View3';
import React, { useState, useEffect } from 'react';

function App() {



  useEffect(() => {
      setState(step)
  },[step]);

  function viewSelector(view  ,setState){
    switch (view) {
  
      case 2:
        return <View2 setState={setState}/>

      case 3:
        return <View3 setState={setState}/>

      default:
        return <View1 setState={setState}/>

    }
  }

  const [state, setState] = useState(1)
  const [step, setStep] = useState(1)

  return (
    <div className="App">
      {viewSelector(state , setStep)}
    </div>
  );
}

export default App;
