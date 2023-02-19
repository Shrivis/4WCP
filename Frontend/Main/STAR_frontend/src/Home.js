import React ,{useEffect,useState}from 'react';
import NavScrollExample from './Components/Navbar';
import Tabs from './Components/TabComponent/Tabs';
import Sidebar from './Components/Sidebar/Sidebar';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function Home() {
  const navigate = new useNavigate();
  const [resourceDetail, setResourceDetail] = useState([]);
  const [resourceRequests, setResourceRequests] = useState([]);
  const [managerRequests, setManagerRequests] = useState([]);
  const [status, setStatus] = useState([]);
 

  useEffect(() => { 
    Promise.all([
      axios.get('http://localhost:8084/api/v1/resource/data', {headers: { 
        Authorization : `Bearer ${localStorage.getItem("token")}`,
        'Access-Control-Allow-Origin': '*'
      }}),
      axios.get('http://localhost:8084/api/v1/request/manager', {headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`,
        'Access-Control-Allow-Origin': '*'
      }}),
      axios.get('http://localhost:8084/api/v1/request/resource', {headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`,
        'Access-Control-Allow-Origin': '*'
      }}),
      axios.get('http://localhost:8084/api/v1/status/getstatus', {headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`,
        'Access-Control-Allow-Origin': '*'
      }})
    ])
    .then(([res1, res2, res3, res4]) => {
      setResourceDetail(res1.data);
      setManagerRequests(res2.data)
      setResourceRequests(res3.data);
      setStatus(res4.data);
    })
    .catch(error => {
      navigate('/login')
    });
  }, [] )


  return (
    <div>
       <NavScrollExample resouceName={resourceDetail.name}/>
       <div class="sbar">
        <Sidebar></Sidebar>
       </div>
       <Tabs resource={resourceDetail} managerReq={managerRequests} resourceReq={resourceRequests} status={status}/>

    </div>
  )
}