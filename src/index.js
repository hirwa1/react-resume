import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
const hirwa = <h1>Try to be the first</h1>;
const off = <div><h3>Be on The top </h3> {hirwa }</div>;
ReactDOM.render(off,  document.getElementById("root"));
ReactDOM.render(hirwa , document.getElementById("ok"))
