import React,{useEffect, useState} from 'react';

const Usefetch=(url)=>{
  
    const[data,setData]=useState("");
    const[error,setError]=useState(false);
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
        const fetchdata=async()=>{
            try{ 
                setLoading(true);
                const response=await fetch(url);
                if(!response.ok){
                    throw new Error("Bad response");
                }
                const result=await response.json();
                setData(result);
                
            }
            catch (err){
                setError(true);
               (console.log('Error',err.message));

            }finally{
                setLoading(false);
            }
          }
     fetchdata(url); 
   
},[]);

useEffect(()=>{
   console.log(data);
},[data]);

    return{data,error,loading};
}
export default Usefetch;
