import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Title } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title);



const BarChart = ({percentage_value}) => {
  const data = {
    labels: [''],
    datasets: [
      {
        label: '',
        data: [parseFloat(percentage_value)], 
        backgroundColor: (context)=>{
            if(!context.chart.chartArea) return "";
            const {ctx,chartArea:{top,bottom,left,right}}=context.chart;
            const gradientBg=ctx.createLinearGradient(left,0,right,0);
            gradientBg.addColorStop(0,'#22B4F8');
            gradientBg.addColorStop(1,'#EDF3C2');
            return gradientBg;
        },
        borderWidth: 0,
        barThickness:6,
        borderRadius:{
          topLeft:10,
          topRight:10,
          bottomLeft:10,
          bottomRight:10,
        },
        borderSkipped:false
      },
      {
        label: '',
        data: [100], 
        backgroundColor: '#454545',
        borderWidth: 0,
        barThickness:6,
        borderRadius:{
          topLeft:10,
          topRight:10,
          bottomLeft:10,
          bottomRight:10,
        },
        borderSkipped:false
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
        stacked:true,
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

  return <Bar  data={data} options={options} />;
};

export default BarChart;
