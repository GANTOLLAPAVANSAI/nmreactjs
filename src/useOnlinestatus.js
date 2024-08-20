import { useEffect, useState } from "react";


const useOnlinestatus=()=>{
    const [Onlinestatus,setOnlinestatus]=useState(true);

     useEffect(()=>{
         window.addEventListener("Offline",()=>{
              setOnlinestatus(false);
         });
         window.addEventListener("Online",()=>{
            setOnlinestatus(true);
       });
         
         
     },[])


    return Onlinestatus;
}
export default useOnlinestatus;