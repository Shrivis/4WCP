import React, { useEffect } from "react"


const rishuapi = () =>{
    let isLoading = true;
    let API = "https://data.covid19india.org/data.json";
    
    const fetchApidata=async(url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        }catch(error){
            console.log(error);
        }
    }

    

    useEffect(()=>{
        fetchApidata(API);
    },[]);

    if(isLoading==true){
        return(
            <>
                <h6>Loading....</h6>
            </>
        );
    }
  
    return(
        <>
         
        </>
    );
};