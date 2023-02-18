import React from 'react'
import { Grid,Paper, Avatar, Button, Input } from '@material-ui/core'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Axios from 'axios'
import { useState } from 'react';
import { BrowserRouter  as Router,Routes,Route,Link, BrowserRouter} from 'react-router-dom';
import Home from '../../Home';
import { useNavigate } from 'react-router-dom';

const Login=()=>{


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
     
    function submit(e)
    {
    e.preventDefault();

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

  }, 
        
        e=> console.error(e)
    );  
    } 

    function handle(e)
    {
        const newdata={...data};
        newdata[e.target.id]=e.target.value;
        setData(newdata);
        // console.log(newdata);

    }


    return(
       
        <Grid style={GridStyle}>
            <div >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Login Incedo</h2>
        </Grid>
                <form onSubmit={ (e) => submit(e) }>
            
                <Input onChange={(e)=>handle(e)}  id="email" value={data.email} label='Incedo-Id'  placeholder='Enter IncedoId' fullWidth required/>
            
                <Input onChange={(e)=>handle(e)} label='Password' value={data.password} id="password"  placeholder='Enter Password' type='password' fullWidth required/>
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>

               
               
            </Paper>
            </div>
        </Grid>
    )

    }
export default Login;