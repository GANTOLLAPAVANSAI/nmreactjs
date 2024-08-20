import { useState } from "react";
import { Link } from "react-router-dom";
import { createBrowserRouter,RouterProvider} from "react-router-dom";

const Heading=()=>{
    const[status,setstatus]=useState("Login")
    return (
        <div className="head">
            <img src="https://i.pinimg.com/1200x/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" alt="image not loaded" className="Logoimage"></img>
            <div className="links">
                <ul className="lists">
                  <li><Link to="/about">About</Link></li> 
                   <li><Link to="/contact">Contact</Link></li>
                   <li><Link to="/">Home</Link></li>
                   <li><Link >Cart</Link></li>
                    <li>
                        <button onClick={()=>{
                            if(status=="Login"){
                                setstatus("Logout")
                            }
                            else{
                                setstatus("Login")
                            }
                        }}>{status}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Heading;