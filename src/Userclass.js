import React from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props)
        this.state={
           
            userInfo:{
                name:"Pavan",
                location:"default",
            }
        };
        
        
    }
       async componentDidMount(){
        //api call
        const data=await fetch("https://api.github.com/users/GANTOLLAPAVANSAI")
        const jsondata= await data.json()
        this.setState({
            userInfo:jsondata,
        })
        console.log(jsondata)
       }

    render(){
        
        
        return(
            <div className="user-card">
            <h1> {this.state.userInfo.login}</h1>
            <h1> {this.state.userInfo.id}</h1>
            <h1>{this.state.userInfo.location}</h1>
            <button onClick={()=>{
                //Never update state variables directly..
                this.setState({
                    count:this.state.count + 1,
                    count2:this.state.count2+1
                })
            }}>Click me to Increment</button>
            <h2>{this.props.name}</h2>
            <h2>{this.props.location}</h2>  
        </div>
        )
    }
}
export default Userclass;