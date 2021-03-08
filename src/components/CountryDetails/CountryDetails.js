import React,{ useEffect, useState} from 'react';
import {useParams} from 'react-router'


const CountryDetails = () => {
    const {countryName} = useParams()

    const [countryDetails,setCountryDetails] = useState({})

    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setCountryDetails(data))
      })
    return (
        <div>
            <h1>{countryName}</h1>
            <img src={countryDetails.flag} alt="country flag"/>
            <h4>Country details{ countryDetails.name}</h4>
            <h2>{countryDetails.population}</h2>
        </div>
    );
};

export default CountryDetails;