  import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h2>Country: {countries.length}</h2>
            {countries.map((country, idx)=> <Country key={idx} country={country}></Country>)}
        </div>

    );
};

export default Home;