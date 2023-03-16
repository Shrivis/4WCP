import React from 'react';
import ReactApexCharts from 'react-apexcharts'

export default function Pie({horizontals, vals, ChartType}) {
    const options = {
      chart: {
        width: '100%',
      },
      labels: horizontals,
      legend:{position: 'left'},
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 240
          },
          
        }
      }],

      fill: {
        opacity: 0.8
      },
      colors:['#1C4E80', '#DBAE58', '#202020'],
    };
    return (
        <div id="chart">
        <ReactApexCharts options={options} series={vals} type={ChartType} width={310} />
        </div> 
    );
}