import React, {useEffect, useState} from 'react';
import {Divider, Badge, Spin, Descriptions} from 'antd';
import PieChart from './Graph/Pie';
import axios from 'axios';
import ActiveInactive from './Graph/Active';
import ManagerBar from './Graph/ManagerBar';
import ProjectBar from './Graph/ProjectBar';
import './Graph/GraphStyle.css'
import { Card } from '@mui/material';

export default function Dashboard () {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => { 
        Promise.all([
            axios.get('http://35.154.232.92:8080/starapp/api/v1/report/horizontal', {headers: { 
            Authorization : `Bearer ${localStorage.getItem("token")}`,
            'Access-Control-Allow-Origin': '*'
            }})
        ])
        .then(([res1]) => {
            setLoading(false);
            setData(res1.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
  return (
    <div>
    {loading ? (  
      <div size="middle" style={{'height':'90vh', 'width':'170vh', 'display':'flex', 'alignItems':'center', 'justifyContent':'center'}}>
        <Spin size="large" />
      </div>
    ) : (<>
    <div className="container">
        <div className="row">
            <div className="row col-md-12 justify-content-evenly">
                <Card className='col-md-4 px-2 py-2'>
                    <p className='text-center small'><small>Extra hours required in each Vertical</small></p>
                    <PieChart horizontals={data.horizontals} vals={data.overUtilizedHours}/>
                </Card>
                <Card className='col-md-4 px-2 py-2'>                    
                    <p className='text-center small'><small>Under Utilized hours in each Vertical</small></p>
                    <PieChart  horizontals={data.horizontals} vals={data.underUtilizedHours}/>
                </Card>
                <div className='py-2 px-2 col-md-3'>
                    <div className=''>
                    <ActiveInactive hData={data}/>
                    </div>
                </div>
                <Card className='col-md-5 mt-2 px-2 py-2'>
                    <p className='text-center small'><small>Extra Hours requried in Delivery Projects</small></p>
                    <ProjectBar names={Object.keys(data.data)} vals={Object.values(data.data)}/>
                </Card>
                <Card className='col-md-6 mt-2 px-5 py-2'>
                    <p className='text-center small'><small>Hours approved by each manager</small></p>
                    <ManagerBar  names={Object.keys(data.managers)} vals={Object.values(data.managers)}/>
                </Card>
            </div>
            <div className="col-md-2">
                {/* <Card sx={{'height':'60vh'}} className='py-5'>details</Card> */}
            </div>
        </div>
    </div></>)}
    </div>
  )
}
