import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'



function CountriesList() {

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

    <div>

        {countries.map((eachCountry)=>{

           return (
            <li key={eachCountry.alpha3Code}>

            <Link to={`/countries/${eachCountry.alpha3Code}`}>{eachCountry.alpha3Code}</Link>

            </li>

           )
                   
            
        })}
    </div>
  )
}

export default CountriesList