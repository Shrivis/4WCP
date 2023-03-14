import React from 'react';
import ReactApexCharts from 'react-apexcharts'

export default function Pie({horizontals, vals}) {
    const options = {
      chart: {
        width: '100%',
        type: 'pie',
      },
      labels: horizontals,
      legend:{position: 'left'},
      dataLabels: {
        formatter: function(val, opts) {
            return opts.w.globals.series[opts.seriesIndex]
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 240
          },
          
        }
      }],
      theme: {
        monochrome: {
          enabled: true
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -15
          },
        }
      },
      fill: {
        opacity: 0.9
      },
    };
    return (
        <div id="chart">
        <ReactApexCharts options={options} series={vals} type="pie" width={320} />
        </div> 
    );
}