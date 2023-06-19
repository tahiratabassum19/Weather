
//   const renderWeatherReport = () => {
//     if (data && Array.isArray(data.hourly)) {
//       return data.hourly.map((hour) => (
//         <div key={hour.time}>
//           <p>Time: {hour.time}</p>
//           <p>Temperature: {hour.temperature_2m}</p>
//           <p>Precipitation: {hour.precipitation}</p>
//           <p>Wind Speed: {hour.windspeed_10m}</p>


import React from 'react';
import HourlyReport from './hourly';
import AirQuality from './airQuality';
import News from './news'
import './App.css'

function App() {
  return (
    <div  className='background-container'>
      <h1 className='weather'>Weather App</h1>

      <h3 className='City'> New York 🌞</h3>
      <h2 className='hourly-report'>Hourly Report </h2>
      <HourlyReport />
      <AirQuality/>
      <News />

    </div>
  );
}




export default App;
