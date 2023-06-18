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
//         </div>
//       ));
//     } else {
//       return <div>Loading weather data...</div>;
//     }
//   };

//   return (
//     <div>
//       {data ? (
//         <div>
//           <h2>Weather Report:</h2>
//           <div className="weather-container">{renderWeatherReport()}</div>
//         </div>
//       ) : (
//         <div>Loading data...</div>
//       )}
//     </div>
//   );
// }

// export default App;






//this worked for only one hour output 


// import React, { useState, useEffect } from "react";

// function App() {
//   const [weather, setWeather] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/members");
//       const jsonData = await response.json();
//       setWeather(jsonData);
//     } catch (error) {
//       console.log("Error fetching weather data:", error);
//     }
//   };

//   return (
//     <div>
//       {weather ? (
//         <div>
//           <h2>Weather Report</h2>
//           <p>Temperature: {weather.temperature}</p>
//           <p>Precipitation: {weather.precipitation}</p>
//           <p>Wind Speed: {weather.wind_speed2m}</p>
//         </div>
//       ) : (
//         <div>Loading weather data...</div>
//       )}
//     </div>
//   );
// }

// export default App;








//tries form input text 
// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [city, setCity] = useState('');

//   const handleGetWeather = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/members", { city });

//       if (response.status === 200) {
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
//     <form>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city"
//       />
//       <button onClick={handleGetWeather}>Get Weather</button>
//       </form>
//     </div>
//   );
// };

// export default App;






//trying 7 days now 


// import React, { useEffect, useState } from 'react';

// function App() {
//   const [hourlyTemperatures, setHourlyTemperatures] = useState([]);

//   useEffect(() => {
//     // Fetch weather data from the backend
//     fetch('/member')
//       .then(response => response.json())
//       .then(data => {
//         const temperatures = data.hourly.temperature_2m;
//         setHourlyTemperatures(temperatures);
//       })
//       .catch(error => {
//         console.log('Error fetching weather data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Hourly Temperature Report</h1>
//       <div className="hourly-temperatures">
//         {hourlyTemperatures.map((temperature, index) => (
//           <div key={index} className="hourly-temperature">
//             {temperature}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import HourlyReport from './hourly';
import AirQuality from './airQuality';
import './App.css'

function App() {
  return (
    <div  className='background-container'>
      <h1>Weather App</h1>
      <h2>Hourly Report </h2>
      <HourlyReport />
      <AirQuality/>
    </div>
  );
}




export default App;
