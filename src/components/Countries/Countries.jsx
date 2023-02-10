import React from 'react'
import { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
  return (
    <div className='countries-container'>
      {
      countries.map(country => <Country 
        country={country.name.common}
        capital={country.capital}
        area={country.area}
        population={country.population}
        flag={country.flags.png}
        key={country.cca3}
        
        
        ></Country>)
     }

    </div>
  )
}

export default Countries
