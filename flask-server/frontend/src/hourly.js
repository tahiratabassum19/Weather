import React, { useEffect, useState } from 'react';
import "./hourly.css";



function HourlyReport() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const currentTime = new Date().toISOString();
  const hourlyData = weatherData.hourly;
  const startIndex = hourlyData.time.findIndex(time => time>=currentTime);
  const endIndex = startIndex + 7;
  const temperatureData = hourlyData.temperature_2m.slice(startIndex, endIndex);
  const timeData = hourlyData.time.slice(startIndex, endIndex);

  return (
    
    <div className="hourly-container">
      {temperatureData.map((temperature, index) => (
        <div key={index} className="hourly-item">
          <p>Time: {timeData[index]}</p>
          <p>Temperature: {temperature}</p>
        </div>
      ))}
    </div>
  );
}

export default HourlyReport;
