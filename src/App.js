import { useEffect, useState } from 'react';
import axios from 'axios';
import '../src/App.css'
import Weather from './components/WeatherComponent/WeatherComp';
import Search from './components/searchComponent/SearchComponent';
function App() {
  const[countries,setCountries]=useState(null);
  const change_to_array=(dict)=>
  {
    let array=[];
    let i=0;
    for(let key in dict)
    {
      array[i]=dict[key].country
      i++;
    }
    return array;
  }
  const fecth_api= async ()=>
    {
        const response = await axios.get("https://api.first.org/data/v1/countries");
        
        setCountries(change_to_array(response.data.data));
        console.log(response);
        
    }
  useEffect(()=>{
    fecth_api();
  },[])
  return (
    <div className="App">
      <Search countries={countries}/>
      {/* <Weather/> */}
    </div>
  );
}

export default App;
