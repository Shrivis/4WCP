import React from 'react';
export const isLoggedIn =()=>{
       let data=localStorage.getItem("token");
       if(data!=null) return true; else return false;}