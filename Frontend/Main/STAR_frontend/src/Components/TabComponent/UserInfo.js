import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import UserData from './UserData.json'
export default function UserInfo() {
    return (
    <ListGroup >
    <ListGroup.Item>Name: {UserData[0].name}</ListGroup.Item>
    <ListGroup.Item>UserID: {UserData[0].userID} </ListGroup.Item>
    <ListGroup.Item>E-mail: {UserData[0].email}</ListGroup.Item>
     {   UserData[0].projects.map((project,i)=>(
        <ListGroup.Item>{UserData[0].projects[i]} , {UserData[0].customerName[i]} , {UserData[0].vertical[i]} , {UserData[0].subHorizontal[i]} </ListGroup.Item>
    ))}
  </ListGroup>
  )
}
