
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, useParams, Link} from "react-router-dom"
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import CountriesList from './components/CountriesList';



function App() {

  const [countries, setCountries] = useState([])

  

  useEffect(()=>{
    getCountries()

  }, [])
   



const getCountries = async () =>{

    try{

        const response = await fetch("https://ih-countries-api.herokuapp.com/countries")
        const responseJSON = await response.json()
        console.log(responseJSON)
        setCountries(responseJSON.results)

    }catch(err){
        console.log(err)
    }
}

  return (
    <div className="App">

      <Navbar/>

      

      <Routes>
        <Route to="/countries" element ={<CountriesList/>}/>
        <Route path="/countries/:id" element= {<CountryDetails/>}/>

      </Routes>
      
     
    </div>
  );
}

export default App;
