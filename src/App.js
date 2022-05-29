
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, useParams, Link} from "react-router-dom"
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import Countries from './countries.json'



function App() {


  return (
    <div className="App">

      <Navbar/>

      <Routes>
        <Route path="/" element={<CountriesList countries={Countries} />} />
        <Route path="/countries/:id" element= {<CountryDetails countries={Countries}/>}/>

      </Routes>
      
     
    </div>
  );
}

export default App;
