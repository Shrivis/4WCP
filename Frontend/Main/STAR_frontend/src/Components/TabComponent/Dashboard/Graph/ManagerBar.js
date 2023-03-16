import React from 'react';
import ReactApexCharts from 'react-apexcharts';

export default function ManagerBar({names, vals}) {      
    const series = [{
        name: 'Extra Hours Approved',
        data: vals
    }];
    const options = {
        plotOptions: {
            bar: {
                borderRadius: 2,
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false
        }, 
        xaxis: {
            categories: names,
        },        
        grid: {
            borderColor: '#FFFFFF',
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        colors:['#1C4E80'],
    };

    return (
        <div id="chart">
            <ReactApexCharts options={options} series={series} type="bar" height={'240vh'} />
        </div>
    );
}