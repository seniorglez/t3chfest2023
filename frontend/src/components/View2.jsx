
import { MainList } from "./mainList";
import FilterOptions from "./filterOptions";
import '../style/view2.css'

function View2() {
    return (
      <div>
        <h1>RESULTADOS</h1>
        <div className="view">
          <FilterOptions/>
          <MainList/>
        </div>
      </div>
    );
    
  }
  
  export default View2;
  