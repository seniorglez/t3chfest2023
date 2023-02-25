
import '../style/view2.css'

function FilterOptions() {
    return (
        <div className="filterOptions">
            <p>Tipo de recurso</p>
            <div>
                <p>4x4</p>
                <input type="radio" name="type"/>
            </div>
            <div>
                <p>Furgonetas</p>
                <input type="radio" name="type"/>
            </div>

            
        </div>
    );
  }
  
  export default FilterOptions;
  