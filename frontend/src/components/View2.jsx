
import React, { useEffect ,useState} from 'react'
import axios from 'axios';

import { MainList } from "./mainList";
import FilterOptions from "./filterOptions";
import '../style/view2.css'


function View2() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/resources.php')
      .then(response => {
        setData(response.data);
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


    return (
      <div className="view">
        <h1>RESULTADOS</h1>
        <div className="mainDiv">
          <FilterOptions/>
          <MainList data={data} />
        </div>
      </div>
    );
    
  }
  
  export default View2;
  