
import '../style/view2.css'

function FilterOptions() {
    return (
        <div className="filterOptions">
            <p>Tipo de recurso</p>
            <div>
                <p>Inmuebles</p>
                <input type="radio" name="type"/>
            </div>
            <div>
                <p>Vehiculos</p>
                <input type="radio" name="type"/>
            </div>
            <div>
                <p>Maquinaria</p>
                <input type="radio" name="type"/>
            </div>

            
        </div>
    );
  }
  
  export default FilterOptions;
  