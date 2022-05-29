import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function CountryDetails() {

  
   const {id} = useParams()
 const [countryDetails, setCountryDetails] = useState([])

 useEffect(() =>{
   getCountriesDetails()


 }, [countryDetails])

 const getCountriesDetails = async () =>{

   try{

       const resposne = await fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
       const responseJSON = await resposne.json()
       console.log(responseJSON)
       setCountryDetails(responseJSON.results)
   }catch(err) {
       console.log(err)
   }
}

   
   return (
      <div>
         <h1>{countryDetails.name.common}</h1>
         <h3>{countryDetails.capital}</h3>
         <h3>{countryDetails.area}</h3>
         

      </div>
   
   )

}

export default CountryDetails