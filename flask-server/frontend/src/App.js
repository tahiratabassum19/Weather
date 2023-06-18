// import React, { useState, useEffect } from "react";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/members"); // Update with the Flask backend URL
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       console.log("Error fetching data:", error);
//     }
//   };

//   return (
//     <div>
//       {data ? (
//         <div>
//           <h2>7 Days Temperature:</h2>
//           <div>
//             {data.sevenDaysTemperature.map((temp, index) => (
//               <div key={index}>{temp}</div>
//             ))}
//           </div>
//           <h2>Hourly Temperature:</h2>
//           <div>
//             {data.hourlyTemperature.map((temp, index) => (
//               <div key={index}>{temp}</div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div>Loading data...</div>
//       )}
//     </div>
//   );
// }

// export default App;

//





// //Json return frontend code 

// import React, { useState, useEffect } from "react";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/members");
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       console.log("Error fetching data:", error);
//     }
//   };

//   return (
//     <div>
//       {data ? (
//         <div>
//           <h2>Raw JSON:</h2>
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       ) : (
//         <div>Loading data...</div>
//       )}
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';

// function App() {
//   const [city, setCity] = useState('');

//   const handleGetWeather = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/members", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `city=${encodeURIComponent(city)}`,
//       });

//       if (response.ok) {
//         console.log('City name sent to the backend successfully.');
//       } else {
//         console.error('Error sending the city name to the backend.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city"
//       />
//       <button onClick={handleGetWeather}>Get Weather</button>
//     </div>
//   );
// }

// export default App;





//trying nice view hourly 

// import React, { useState, useEffect } from "react";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/members");
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       console.log("Error fetching data:", error);
//     }
//   };

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
import './App.css'

function App() {
  return (
    <div  className='background-container'>
      <h1 className='weather'>Weather App</h1>

      <h3 className='City'> New York 🌞</h3>
      <h2 className='hourly-report'>Hourly Report </h2>
      <HourlyReport />
      <AirQuality/>
    </div>
  );
}




export default App;
