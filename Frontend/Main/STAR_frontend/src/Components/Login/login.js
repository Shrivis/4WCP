import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

}
from 'mdb-react-ui-kit';
import { color } from '@mui/system';


export default function Login() {
  const url="http://localhost:8084/api/v1/auth/authenticate" //API for JWT
  const[errMsg,setErrMsg]=useState('');
  const navigate = useNavigate(); 
  const [data, setData] = useState({
    "email":"",
    "password":"" 
  })
     
  function submit(e) {
    e.preventDefault();
    Axios.post(url,{
        "email": data.email, 
        "password": data.password
      },
      { headers:{
          'Access-Control-Allow-Origin':'*'
        }
      }).
      then(res=> {
        localStorage.setItem("token",res.data.token);
        navigate("/home")
      }, 
      (e) => setErrMsg("Invalid Credentitals")
  );} 

    function handle(e) {
        const newdata={...data};
        newdata[e.target.id]=e.target.value;
        setData(newdata);
    }
  return (
    <MDBContainer fluid className='body'style={{height:"36rem"}}>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center body' style={{height:"36rem"}}>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Comp-Ov <br />
            <span className='display-6 fw-bold' style={{color:"#f44336"}}>Easier overtime management</span>
          </h1>
          <p className='px-3 fw-bold' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Now manage your employee's overtime pays in an easier and efficient way. We provide an
            ultimate solution for keeping track of overtime requests of your employees and comprehensive 
            tools to visualise overtime working activities throughout the organisation.
          </p>
        </MDBCol>

        <MDBCol md='5' style={{height:"35rem"}}>

          <MDBCard className='my-5' style={{height:"30rem"}}>
            <MDBCardBody className='p-5' style={{marginTop:"8rem"}}>
            <form onSubmit={ (e) => submit(e) }>
              <MDBInput onChange={(e)=>handle(e)} wrapperClass='mb-4' value={data.email} id='email' type='email' placeholder='Email Address'/>
              <MDBInput onChange={(e)=>handle(e)} wrapperClass='mb-4' value={data.password}  id="password" type='password' placeholder='Password'>
              <span className='text-danger mt-1'>{errMsg}</span></MDBInput>
              <MDBBtn className='w-100' size='md' style={{height:"2.5rem", backgroundColor:"#f44336"}}>Login</MDBBtn>
            </form>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

