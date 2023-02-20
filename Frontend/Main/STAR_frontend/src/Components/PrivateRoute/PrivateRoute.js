import React from 'react';
import { Outlet,useNavigate } from 'react-router';
import {isLoggedIn} from './Auth';

const isTokenExpire = token => Date.now() >= (JSON.parse(atob(token.split('.')[1]))).exp * 1000
const isTokenExpired=()=>{
    const token= localStorage.getItem("token");
    const res=isTokenExpire(token);
    return res;
}
const Privateroute =()=>{
    const navigate = useNavigate()
    if(isLoggedIn() && !isTokenExpired())
    return <Outlet/>
    else{
        localStorage.clear();
        navigate('/login')
    }
}
export default Privateroute;