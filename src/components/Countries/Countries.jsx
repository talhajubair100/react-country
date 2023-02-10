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
    <div>
      <h2>Countries : {countries.length}</h2>
      {
      countries.map(country => <Country name={country.name.common} flags={country.flags.png} population={country.population} area={country.area} />)
     }
    </div>
  )
}

export default Countries
