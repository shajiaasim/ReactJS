import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

//virtual DOM
const element = <h1> Hello world</h1>;

ReactDOM.render(<Counters />, document.getElementById("root"));
