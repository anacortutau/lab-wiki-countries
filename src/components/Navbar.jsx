
import React from 'react'
import { Link} from 'react-router-dom'


function Navbar(props) {

    
    return (
    <div>

        <h1> LAB-wikiCountries</h1>
        
        <Link to="/countries">Countries</Link>

    </div>
  )
}

export default Navbar