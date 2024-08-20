import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useState } from "react";
 import Heading from "./src/Header";
 import Body from "./src/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/About";
import Contact from "./src/Contac";
import { Outlet } from "react-router-dom";
import Error from "./src/Error";
import Restramenu from "./src/Restamenu";

const root=ReactDOM.createRoot(document.getElementById("root"))





const Reacthook=()=>{
    const[update,setupdate]=useState(0)
    
    
    return(
        <div className="addition">
            {count=update}
            <button className="add" onClick={()=>{
                setupdate(count+=1)
            }}>Increment by 1</button>
            <button className="sub" onClick={()=>{
                setupdate(count-=1)
            }}>Decrement by 1</button>
        </div>
    )
}
const Applayout=()=>{
    return(
        <div>
         <Heading/>
        <Outlet/>
        </div>
    )
}
const routing = createBrowserRouter([
    {
      path: "/",
      element: <Applayout/>, 
       // Assuming there's a Home component
      children: [
        {
            path: "/", // Nested route, no need to add a leading slash
            element: <Body />,
          },
        {
          path: "about", // Nested route, no need to add a leading slash
          element: <About />
        },
        {
          path: "contact", // Nested route
          element: <Contact />
        },
        {
            path:"/restaurants/:resId",
            element:<Restramenu/>
        }
      ],
      errorElement:<Error/>,
    }
  ]);
  
root.render(<RouterProvider router={routing}/>)