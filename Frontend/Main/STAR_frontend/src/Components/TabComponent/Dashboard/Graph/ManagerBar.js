import React from 'react';
import ReactApexCharts from 'react-apexcharts';

export default function ManagerBar({names, vals}) {      
    const series = [{
        data: vals
    }];
    const options = {
        chart: {
        type: 'bar',
        height: 350
        },
        plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: true,
        }
        },
        dataLabels: {
        enabled: false
        },
        xaxis: {
        categories: names,
        }
    };

    return (
        <div id="chart">
            <ReactApexCharts options={options} series={series} type="bar" height={240} />
        </div>
    );
}