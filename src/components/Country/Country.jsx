import React from 'react'


const Country = (props) => {
  return (
    <div>
      <h4>Countru Name: {props.country}</h4>
      <p>Capital : {props.capital}</p>
      <p>Area : {props.area}</p>
      <p>Population : {props.population}</p>
      <img style={{height: '100px'}} src={props.flag} alt=""/>
   
    </div>
  );
};

export default Country
