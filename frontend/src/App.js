import logo from './logo.svg';
import './App.css';
import View1 from './components/View1';
import View2 from './components/View2';
import View3 from './components/View3';

function App() {

  const viewSelector = (view) =>{
    switch (view) {
      case 1:
        return <View1/>
        break;
      
      case 2:
        return <View2/>
        break;

      case 3:
        return <View3/>
        break;

      default:
        console.log("XDDD")
        break;
    }
  }

  return (
    <div className="App">
      {viewSelector(1)}
    </div>
  );
}

export default App;
