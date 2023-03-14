import { TrendingUp } from '@material-ui/icons';
import React from 'react';
import ReactApexCharts from 'react-apexcharts'

export default function BarComp() {
  const series = [{ data: [40,20,60,60,20,60,60,20,60,60] }];
  const options = {
    chart: {
      width:'100%',
      type: 'bar',
      title:'hello',
      events: {
        click: function(chart, w, e) {
          console.log(chart, w, e)
        }
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
    dataLabels: {
      show:false,
      enabled: false,
    },
    legend: {
      show: true,
      position: 'left',
    },
    xaxis: {
      categories: [
        "project1", "project2", "project3","project4", "project2", "project3","project4", "project2", "project3","project4",
      ],
      labels: {
        style: {
          fontSize: '12px'
        },
        enable:true,
        show:false,
      }
    },      
    theme: {
      monochrome: {
        enabled: true
      },
    },
    plotOptions: {
      bar: {
        barHeight:'10%',
        columnWidth: '40%',
        distributed: true,
      }
    },
  };
  return (
    <div id="chart">
    <ReactApexCharts options={options} series={series} type="bar" height={250} />
    </div>
  );
}