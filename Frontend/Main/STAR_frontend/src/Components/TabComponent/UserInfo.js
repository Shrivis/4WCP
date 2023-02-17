import React ,{useEffect,useState}from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
export default function UserInfo() {

  let API = "http://localhost:8084/api/v1/User/1";
  const [data,setData]=useState([]);
  localStorage.setItem("token","hello");
  const jwtToken=localStorage.getItem("token");
  console.log(jwtToken);
  
  const fetchApidata=async(url)=>{
      try{
          const res = await fetch(url,{
            method:'GET',
            headers: {
              'Authorisation' : String(jwtToken),
              'Content-Type' : 'text/plain'
            }},
            );
          const actualData = await res.json();
          console.log(actualData);
          setData(actualData);
      }catch(error){
          console.log(error);
      }
  }

  

  useEffect(()=>{
      fetchApidata(API);
  },[]);
     







    return (
    <div>
      <ListGroup >
        <ListGroup.Item>Name: {data.name}</ListGroup.Item>
        <ListGroup.Item>UserID: {data.userId} </ListGroup.Item>
        <ListGroup.Item>E-mail: {data.email}</ListGroup.Item>
        {/* {data.horizontal.map((p, i) => 
            <h1>hello {i}</h1>
            // <ListGroup.Item>{data.projects[i]} , {data.vertical[i]}, {data.horizontal[i]} , {data.subHorizontal[i]} </ListGroup.Item>
        )} */}
      </ListGroup>
    </div>
  )
}





