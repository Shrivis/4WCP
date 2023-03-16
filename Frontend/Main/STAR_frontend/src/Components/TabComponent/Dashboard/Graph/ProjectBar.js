import React, { useEffect, useState } from 'react';
import ReactApexCharts from 'react-apexcharts';
import {Spin} from 'antd';

export default function ManagerBar({projectData}) {
    const [projectName, setProjectName] = useState([]);
    const [extraHour, setExtraHour] = useState([]);
    const [underUtil, setUnderUtil] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProjectName(Object.keys(projectData));
        setExtraHour(Object.entries(projectData).map(([key, value]) => value['first']));
        setUnderUtil(Object.entries(projectData).map(([key, value]) => value['second']));
        setLoading(false);
    }, [] );

    const series = [{
        name: 'Extra Hours Claimed',
        data: extraHour,
      }, {
        name: 'Under Utilized Hours',
        data: underUtil,

    }];
    const options = {
        chart: {
        type: 'bar',
        // height: 350,
        width: '100%',
        // zoom: true,
        },
        plotOptions: {
        bar: {
            borderRadius: 1,
            horizontal: true,
        }
        },
        dataLabels: {
        enabled: false
        },
        xaxis: {
        categories: projectName,
        },
        colors:['#1C4E80', '#DBAE58', '#202020'],
        grid: {
            borderColor: '#FFFFFF',
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        }
    };

    return (
        <div>
        {loading ? (  
          <div size="middle" style={{'height':'90vh', 'display':'flex', 'alignItems':'center', 'justifyContent':'center'}}>
            <Spin size="large" />
          </div>
        ) : (<>
        <div id="chart">
            <ReactApexCharts options={options} series={series} type="bar" height={'240vh'} />
        </div></>)}
        </div>
    );
}