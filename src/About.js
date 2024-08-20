import Usercard from "./Usercard";
import Userclass from "./Userclass";
import React from "react";


class  About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent constructor")
    }
    componentDidMount(){
        console.log("parent component mount ")
    }
    render(){
        console.log("Parent render")


    return(
        <div className="Aboutus">
            <Userclass name={"Pavan sai"} location={"Banglore"}/>
             <h1>This is about us page!</h1>
        </div>
    )
}
}

export default About;