import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";

import Children from "./component/children/Children";
import CreatRef from "./component/creactRef/CreatRef";
import LifeCycle from "./component/lifecycle/LifeCycle";
import About from "./component/about/About";
import Home from "./component/home/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Antd from "./component/antd/Antd";
import Antd2 from "./component/antd/Antd2";
import TodoList1 from "./component/antd/TodoList";
import ListItem from "./component/antd/ListItem";
function App() {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Route path="/" exact component={Home} />
    //     <Route path="/about/" exact component={About} />
    //   </div>
    // </BrowserRouter>
    <div className="App">
      {/* <Test />
      <About /> */}
      {/* <Antd /> */}
      {/* <Antd2 /> */}
      {/* <Todo /> */}
      <TodoList1 />
      {/* <ListItem /> */}
    </div>
  );
}
export default App;
