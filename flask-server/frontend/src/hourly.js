// import React, { useEffect, useState } from 'react';
// import './hourly.css';
// import axios from 'axios';


// function HourlyReport() {
//   const [weatherData, setWeatherData] = useState(null);
//   axios.defaults.headers.post['Content-Type'] = 'application/json';

//   useEffect(() => {
//     fetch('http://localhost:5000/hourly')
//       .then(response => response.json())
//       .then(data => setWeatherData(data));
//   }, []);

//   if (!weatherData) {
//     return <div>Loading...</div>;
//   }

//   const currentHour = new Date().getHours();
//   const hourlyData = weatherData.hourly;
//   const start = hourlyData.time.findIndex(time => new Date(time).getHours() >= currentHour);
//   const end = start + 7;
//   const temperatureData = hourlyData.temperature_2m.slice(start, end);
//   const timeData = hourlyData.time.slice(start, end).map(time => {
//     const dateObj = new Date(time);
//     const options = { hour: 'numeric', hour12: true };
//     return dateObj.toLocaleTimeString([], options);
//   });
  

//   return (
//     <div className="hourly-container">
//       {temperatureData.map((temperature, index) => (
//         <div key={index} className="hourly-item">
//           <p className="temperature">{temperature}°</p>
//           <p className="datetime">{timeData[index]}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HourlyReport;



import React, { useEffect, useState } from 'react';
import './hourly.css';
import axios from 'axios';

function HourlyReport() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
   
    // Use Axios for the GET request
    axios
   
      .get('http://localhost:5000/hourly',{
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data)
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const currentHour = new Date().getHours();
  const hourlyData = weatherData.hourly;
  const start = hourlyData.time.findIndex(
    (time) => new Date(time).getHours() >= currentHour
  );
  const end = start + 7;
  const temperatureData = hourlyData.temperature_2m.slice(start, end);
  const timeData = hourlyData.time
    .slice(start, end)
    .map((time) => {
      const dateObj = new Date(time);
      const options = { hour: 'numeric', hour12: true };
      return dateObj.toLocaleTimeString([], options);
    });

  return (
    <div className="hourly-container">
      {temperatureData.map((temperature, index) => (
        <div key={index} className="hourly-item">
          <p className="temperature">{temperature}°</p>
          <p className="datetime">{timeData[index]}</p>
        </div>
      ))}
    </div>
  );
}

export default HourlyReport;

