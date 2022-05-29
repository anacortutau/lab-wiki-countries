
import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'



function CountriesList(props) {

    

    const [countriesList, setCountriesList] = useState([])
    const {alpha3Code} = useParams()
   
    useEffect(()=>{

        getCountries()

    }, [])

    const getCountries = async () =>{

        try{

            const response = await fetch("https://ih-countries-api.herokuapp.com/countries")
            const responseJSON = await response.json()
            console.log(responseJSON)
            
            setCountriesList(responseJSON.results)
        }catch(err) {
            console.log(err)
        }
    }

  return (

   <div>

      
        {
            countriesList.map((eachCountry)=>{
                

                return (
                 <li>
     
                 <Link to={`/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>
     
                 </li>
     
                )
                        
                 
             })}

        </div>


        
    
  )
}

export default CountriesList