
import React from 'react';
import HourlyReport from './hourly';
import AirQuality from './airQuality';
import News from './news'
import './App.css'
import CityForm from './City';

function App() {
  return (
    <div  className='background-container'>
      <h1 className='weather'>Weather App</h1>
      <CityForm/>

      <h3 className='City'> New York 🌞</h3>
      <h2 className='hourly-report'>Hourly Report </h2>
      <HourlyReport />
      <AirQuality/>
      <News />

    </div>
  );
}




export default App;
