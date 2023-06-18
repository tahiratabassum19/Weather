
import React, { useEffect, useState } from 'react';
import './hourly.css';

function HourlyReport() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/members')
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const currentTime = new Date().toISOString();
  const hourlyData = weatherData.hourly;
  const start = hourlyData.time.findIndex(time => time >= currentTime);
  const end = start + 7;
  const temperatureData = hourlyData.temperature_2m.slice(start, end);
  const timeData = hourlyData.time.slice(start, end);

  return (
    <div className="hourly-container">
      {temperatureData.map((temperature, index) => (
        <div key={index} className="hourly-item">
          <p className="temperature">{temperature}</p>
          <p className="datetime">{timeData[index]}</p>
        </div>
      ))}
    </div>
  );
}

export default HourlyReport;
