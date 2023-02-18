// import React from 'react'
// import { Grid,Paper, Avatar, Button, Input } from '@material-ui/core'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Axios from 'axios'
// import { useState } from 'react';
// import { BrowserRouter  as Router,Routes,Route,Link, BrowserRouter} from 'react-router-dom';
// import Home from '../../Home';
// import { useNavigate } from 'react-router-dom';

// const Login=()=>{


    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto", }
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const GridStyle={backgroundColor:'Pink'}
    const url="http://localhost:8084/api/v1/auth/authenticate" //API for JWT
    const navigate=useNavigate(); 
    const [jwt,setJwt]=useState("")
    const [data,setData]=useState({
        "email":"",
        "password":"" 
 })
     
//     function submit(e)
//     {
//     e.preventDefault();

     Axios.post(url,{
      "email": data.email,
      "password": data.password
    }).then(res=> {
    //    console.log("JWT token" )
       alert(" Logged In Successfully ")
    //    console.log(res.data)
    console.log(res.data);
    console.log("###########################");
    console.log("###########################");
    console.log("###########################");
    console.log("###########################");
       setJwt(JSON.stringify(res.data.token));
    //    localStorage.setItem("token",jwt);
       localStorage.setItem("token",JSON.stringify(res.data.token));
       navigate("/home")

//   }, 
        
//         e=> console.error(e)
//     );  
//     } 

//     function handle(e)
//     {
//         const newdata={...data};
//         newdata[e.target.id]=e.target.value;
//         setData(newdata);
//         // console.log(newdata);

//     }


//     return(
       
//         <Grid style={GridStyle}>
//             <div >
//             <Paper elevation={10} style={paperStyle}>
//                 <Grid align='center'>
//                      <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
//                     <h2>Login Incedo</h2>
//         </Grid>
//                 <form onSubmit={ (e) => submit(e) }>
            
//                 <Input onChange={(e)=>handle(e)}  id="username" value={data.username} label='Incedo-Id'  placeholder='Enter IncedoId' fullWidth required/>
            
//                 <Input onChange={(e)=>handle(e)} label='Password' value={data.password} id="password"  placeholder='Enter Password' type='password' fullWidth required/>
                
//                 <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
//                 </form>

               
               
//             </Paper>
//             </div>
//         </Grid>
//     )

//     }
// export default Login;

import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import Logo from '../../images/incedologo.png';

export default function Login() {
  return (
    // <div className='h-60'>
    <MDBContainer className="my-5 gradient-form h-50" >

      <MDBRow className="  h-50">

        <MDBCol col='6' className="mb-1" style= {{ height:'30rem'}}>
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src={Logo}
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-4 mb-8 ">We are The Incedo Team</h4>
            </div>


            <MDBInput wrapperClass='mb-4 mt-5' label='Email address' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-6' label='Password' id='form2' type='password'/>

 
            <div className="text-center pt-1 pb-1 mt-5">
              <MDBBtn className="w-100 gradient-custom-2">Sign in</MDBBtn>
             
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-2 mb-2">
              {/* <p className="mb-0">Don't have an account?</p> */}
              {/* <MDBBtn outline className='mx-2' color='danger'>
                Danger
              </MDBBtn> */}
            </div>

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
    // </div>
  );
}
