import React,{ useEffect, useState} from 'react';
import {useParams} from 'react-router'


const CountryDetails = () => {
    const {countryName} = useParams()
     
    const [countryDetails,setCountryDetails] = useState([])
       
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setCountryDetails(data[0]))
      })
      console.log(countryDetails)
    return (
        <div>
            <img src={countryDetails.flag} alt="country flag"/>
            <h2>{countryName}</h2>
            
            <h4>Capital: { countryDetails.capital}</h4>
            <h2>{countryDetails.population}</h2>
        </div>
    );
};

export default CountryDetails;