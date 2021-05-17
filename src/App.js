import React, { Component } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { Row, Col, Button } from "antd";
import User from "./Component/User";
import axios from "axios";
import "antd/dist/antd.css";
import "./App.css";
import Login from "./Component/Login";
import UserInfo from "./UserInfo";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
          <Route path="/login" component={Login}></Route>
         
            {window.localStorage.getItem("token") !== "" ? (
              <Route path="/" component={UserInfo}></Route>
            
            ) : (
              <Redirect to="/login"></Redirect>
            )}{" "}
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
