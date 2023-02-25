
import './App.css';
import View1 from './components/View1';
import View2 from './components/View2';
import View3 from './components/View3';

function App() {

  const viewSelector = (view) =>{
    switch (view) {
  
      case 2:
        return <View2/>

      case 3:
        return <View3/>

      default:
        return <View1/>

    }
  }

  return (
    <div className="App">
      {viewSelector(1)}
    </div>
  );
}

export default App;
