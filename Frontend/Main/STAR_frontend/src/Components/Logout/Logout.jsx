import React ,{useEffect,useState}from 'react';
import { DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import { UncontrolledDropdown } from 'reactstrap';
import './Logout.css';
function Logout() {
    // let url = "http://localhost:8084/api/v1/User/1"
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
        <div style={{backgroundColor:'#212529'}}>
            <UncontrolledDropdown className='lout' style={{backgroundColor:'#212529'}}>
                <DropdownToggle class="text-dark" style={{backgroundColor:'#212529'}}><div class="text-white">Name</div>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem href='http://localhost:3001/login'>
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    );
}

export default Logout;