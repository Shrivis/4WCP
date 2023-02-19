import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import Logo from '../../images/incedologo.png';

export default function Login() {

  const url="http://localhost:8084/api/v1/auth/authenticate" //API for JWT
  const navigate = useNavigate(); 
  const [jwt, setJwt] = useState("")
  const [data, setData] = useState({
    "email":"",
    "password":"" 
  })
     
  function submit(e) {
    e.preventDefault();
    console.log(data.email);
    console.log(data.password);

    Axios.post(url,{
      "email": data.email,
      "password": data.password
    },{headers:{'Access-Control-Allow-Origin':'*'}}).then(res=> {
    alert(" Logged In Successfully ")
      setJwt(JSON.stringify(res.data.token));
      localStorage.setItem("token",res.data.token);
      navigate("/home")
    }, 
      e=> console.error(e)
  );} 

    function handle(e) {
        const newdata={...data};
        newdata[e.target.id]=e.target.value;
        setData(newdata);
    }

  return (
    <MDBContainer className="my-5 gradient-form h-50" >

      <MDBRow className="  h-50">

        <MDBCol col='6' className="mb-1" style= {{ height:'30rem'}}>
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src={Logo}
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-4 mb-8 ">We are The Incedo Team</h4>
            </div>

            <form onSubmit={ (e) => submit(e) }>
              <MDBInput onChange={(e)=>handle(e)} wrapperClass='mb-4 mt-5' value={data.email} label='Email address' id='email' type='email'/>
              <MDBInput  onChange={(e)=>handle(e)} wrapperClass='mb-6' value={data.password} label='Password' id="password" type='password'/>

  
              <div className="text-center pt-1 pb-1 mt-5">
                <MDBBtn type="submit" className="w-100 gradient-custom-2">Sign in</MDBBtn>
              
              </div>
            </form>
            <div className="d-flex flex-row align-items-center justify-content-center pb-2 mb-2"></div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5"  style= {{ height:'30rem'}}>
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 ">

            <div className="text-white px-3 py-4 px-5 h-100 ">
              <h4 class="mb-4" style= {{ textAlign :'center'}} >We are more than just a company!</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}
