import React ,{useEffect,useState}from 'react';
import { DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import { UncontrolledDropdown } from 'reactstrap';
import './Logout.css';
function Logout() {
    // let url = "http://localhost:8084/api/v1/User/1"
    let API = "http://localhost:8084/api/v1/User/1";
    const [data,setData]=useState([]);
    
    const fetchApidata=async(url)=>{
        try{
            const res = await fetch(url);
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
            <UncontrolledDropdown className='lout'>
                <DropdownToggle color="light">{data.name}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    );
}

export default Logout;