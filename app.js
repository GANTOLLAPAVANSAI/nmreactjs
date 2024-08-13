import React from "react";
import ReactDOM from "react-dom";

const head=React.createElement("div",{id:"parent"},
    [React.createElement("h1",{id:"heading"},'Hi this is the heading inside parent'),React.createElement("p",{id:"para"},"Lorem ipsum....")]
)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(head)
console.log(head)
console.log("hi this is pavansai")
