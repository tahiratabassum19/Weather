import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, LineElement, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CategoryScale, LinearScale, TimeScale } from 'chart.js';
import moment from 'moment';
import 'chartjs-adapter-moment';
import { format } from 'date-fns';


import './airQuality.css';

ChartJS.register(CategoryScale, LinearScale, TimeScale);
ChartJS.register(LineElement, PointElement);

function AirQuality() {
  const [airData, setAirData] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/airQuality')
      .then(response => response.json())
      .then(data => {
        const timeLabels = data.hourly.time;
        const aqiValues = data.hourly.us_aqi;

        const newData = {
          labels: timeLabels,
          datasets: [
            {
              label: 'Air Quality',
              data: aqiValues,
              backgroundColor: 'rgba(75, 192, 192, 0.4)',
              borderColor: 'rgba(75, 192, 192, 1)',
            },
          ],
        };

        setChartData(newData);
        setAirData(data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  if (!chartData || !airData) {
    return <div>Loading...</div>;
  }

  const chartOptions = {
    scales: {
      x: {
        type: 'time',
        time: {
          tooltipFormat: 'MMM D, YYYY h:mm A',
          displayFormats: {
            hour: 'h:mm A',
          },
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        bodyFontColor: '#fff',
        bodyFontSize: 12,
        borderColor: 'rgba(0, 0, 0, 0.8)',
        borderWidth: 1,
        borderRadius: 3,
        padding: 6,
        displayColors: false,
        callbacks: {
          title: () => null, 
          label: context => {
            const dataset = context.dataset.label;
            const value = context.parsed.y;
            return `${dataset}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="air-quality-container">
      <h2>Air Quality Line Chart</h2>
      <div className="chart">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default AirQuality;
