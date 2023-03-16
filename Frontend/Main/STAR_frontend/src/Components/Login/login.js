import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import userIcon from '../Images/userIcon.png'
import Button from '@mui/material/Button';
import { MDBInput } from 'mdb-react-ui-kit';
import { Card } from '@mui/material';


export default function Login() {
  const url="http://35.154.232.92:8080/starapp/api/v1/auth/authenticate";
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
      (e) => setErrMsg("Invalid Credentials")
  );} 

  function handle(e) {
      const newdata={...data};
      newdata[e.target.id]=e.target.value;
      setData(newdata);
  };
  return (
    <div id='imgDiv'>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-4">
            <Card component="form" id="pullDown"  onSubmit={(e)=>submit(e)}>
              <div className='text-center'><img className='user-img'
                width={120}
                src={`${userIcon}?w=248&fit=crop&auto=format`}
                srcSet={`${userIcon}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={'...'}
                loading="lazy"
              /></div>
              <div className='text-center mb-4'>StarAPP Login</div>
              <MDBInput onChange={(e)=>handle(e)} fullWidth className='col-lg-py-2 text-center' id='email' wrapperClass='mb-2' placeholder="Email" type='email' value={data.email}/>
              <MDBInput onChange={(e)=>handle(e)} fullWidth className='col-lg-py-2 text-center' id='password' wrapperClass='mb-2' placeholder="Password" type='password' value={data.password}/>
              <span className='text-danger mb-2'>{errMsg}</span>
              <Button type="submit" className='mb-5 mt-2' fullWidth variant="contained">Sign In</Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

