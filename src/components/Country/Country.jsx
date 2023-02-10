import React from 'react'


const Country = (props) => {
  return (
    <div>
    <h4>Country Name: {props.name}</h4>
        <p>Population: {props.population}</p>
        <p>Area: {props.area}</p>

     <img src={props.flags} alt="" />
    </div>
  )
}

export default Country
