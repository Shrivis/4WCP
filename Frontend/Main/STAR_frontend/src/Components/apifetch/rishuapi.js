import React, { useEffect } from "react"


const rishuapi = () =>{
    let isLoading = true;
    let API = "https://hn.algolia.com/api/v1/search?query=html";

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