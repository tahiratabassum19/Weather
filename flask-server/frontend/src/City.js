import React, { useEffect, useState } from 'react';
import './City.css';
import axios from 'axios';

const CityForm =()=>{
    const [cityName, setCityName]=useState('');
    const handleCitynameChange = (e) => {
         setCityName(e.target.value);

      };

    // const handleCountrynameChange = (e) => {
    //     setCountryName(e.target.value);
    //  };
    
   
   
    const handleSubmit = (e) => {
        e.preventDefault();
      
      
    const userCity={
        city: cityName,
        //country: countryName
    };
    
  
    
    axios.defaults.headers.post['Content-Type'] = 'application/json';


    axios.post("http://localhost:5000/news", userCity)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });


    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios.post("http://localhost:5000/airQuality", userCity)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
    axios.defaults.headers.post['Content-Type'] = 'application/json';


    axios.post("http://localhost:5000/hourly", userCity,
    {
      headers: {
          'Content-Type': 'application/json',
      }
     }
    
    )
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
};
    
    
  return (
    <div className='cityName'>
      <h1>Enter a City Name</h1>
      <form onSubmit={handleSubmit}>
        <div className='cityBox'>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={cityName}
            onChange={handleCitynameChange}
          />
        <button className="submitbutton" type="submit">Get Weather</button>

        </div>
      </form>
    </div>
  );
};

export default CityForm;

    
    
    
