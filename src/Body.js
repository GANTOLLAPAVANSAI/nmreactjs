import Restrocard from "./Restrocard";
import { Array } from "./data";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "./useOnlinestatus";



const Body=()=>{
    const[data,setdata]=useState([]);
    const[filterrestro,setfilterrestro]=useState([]);
    const[searchtext,setsearchtext]=useState("");
    
    useEffect(()=>{
        fetchdata();
    },[])
    const fetchdata= async ()=>{
       const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
       const jsondata=await data.json();
       setdata(jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setfilterrestro(jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }   

    const Onlinestatus=useOnlinestatus();
    if(Onlinestatus===false){
        return(
            <h1>Please check your internet!</h1>
        )
    }


    if(data.length===0){
        return(<h1>Loading....</h1>)
    }
    
    return(
        <div className="body">
            <div className="search">
                <input type="text" className="search-box" value={searchtext} onChange={(e)=>{setsearchtext(e.target.value)}}></input>
                <button onClick={()=>{
                  const searchbox=data.filter((x)=>{
                        return x.info.name.toLowerCase().includes(searchtext.toLowerCase())
                  })
                  setfilterrestro(searchbox)
                }}>Search</button>
            </div>
            <div className="filter">
               <button onClick={()=>{
                const filterearray= data.filter((x)=>{
                    return x.info.avgRating>4.1;
                })
                setfilterrestro(filterearray)
               }}>Top Rated Restaurants</button>
            </div>
            
            <div className="cards">

              {filterrestro.map((x,index)=>{
                return (
                 <Link to={"/restaurants/"+x.info.id} style={{textDecoration:"none"}}><Restrocard key={index} resdata={x}/></Link>)
              })}
            </div>
        </div>
    )
}
export default Body;