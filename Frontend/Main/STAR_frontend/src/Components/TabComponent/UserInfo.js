import React ,{useEffect,useState}from 'react';

export default function UserInfo() {
  let API = "http://localhost:8084/api/v1/resouce";
  const [data, setData]=useState([]);
  const fetchApidata=async(url)=>{
      try{
          const res = await fetch(url,{
            headers: { 
              Accept: 'application/json',
              Authorization : `Bearer ${localStorage.getItem("token")}`,
              'Access-Control-Allow-Origin': '*'
            }
          });
          const actualData = await res.json();
          setData(actualData);
      }catch(error){
          console.log(error);
      }
  }
  return (
    <div><h1></h1></div>
  );
}





