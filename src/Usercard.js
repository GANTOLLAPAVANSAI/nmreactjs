import { useState } from "react";

const Usercard=(props)=>{
const [count,setcount]=useState(0);
    return(
        <div className="user-card">
            <h1>count= {count}</h1>
            <h2>Pavan sai</h2>
            <h2>{props.name}</h2>
            <h3>Location: Banglore</h3>
        </div>
    )
}
export default Usercard;