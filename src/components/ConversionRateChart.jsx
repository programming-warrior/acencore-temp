import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Title } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title);

const ConversionRateChart = ({ percentage_value }) => {
  const data = {
    labels: [''],
    datasets: [
      {
        label: '',
        data: [parseFloat(percentage_value)], 
        backgroundColor: (context) => {
          if (!context.chart.chartArea) return "";
          const { ctx, chartArea: {  left, right } } = context.chart;
          const gradientBg = ctx.createLinearGradient(left, 0, right, 0);
          gradientBg.addColorStop(0, '#00F5A0');
          gradientBg.addColorStop(1, '#00D9F5');
          return gradientBg;
        },
        borderWidth: 0,
        barThickness: 5,  // Adjust thickness here
        borderRadius: {
          topLeft: 50,
          topRight: 50,
          bottomLeft: 50,
          bottomRight: 50,
        },
        borderSkipped: false
      },
      {
        label: '',
        data: [100], 
        backgroundColor: '#1E1E1E',
        borderWidth: 0,
        barThickness: 5,  // Adjust thickness here
        borderRadius: {
          topLeft: 50,
          topRight: 50,
          bottomLeft: 50,
          bottomRight: 50,
        },
        borderSkipped: false
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          display: false,
        },
        display: false,
        beginAtZero: true,
        max: 100,
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
        beginAtZero: true,
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return <Bar data={data} options={options} height={50} />;
};

export default ConversionRateChart;
