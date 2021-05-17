
import React, { Component } from "react";
import jwt from 'jsonwebtoken';
import webdesign from '../web-design.png'

import './login.css';

export default class Login extends Component {
  constructor(props){
      super(props)
      this.state={
          email:"",
          password:""
      }
  }

  handleEmailChange = (e) => {
    if(e.target.value === "admin"){
      this.setState({email: e.target.value})
    }
      
  }
  handlePasswordChange = (e) => {
    if(e.target.value === "admin"){
    this.setState({password: e.target.value})
    }
    else{

    }
  }

  handleSubmit = () => {
    if(this.state.email === "admin" && this.state.password === "admin"){
      const authJWT = jwt.sign({email:this.state.email, pass:this.state.password},'privatekeeeyy');
      console.log(authJWT);
      window.localStorage.setItem("token",authJWT);
      window.location.replace("http://localhost:3000/")
    }
    else{
      document.getElementById("error").innerHTML="<font color='red'>Invalid username or password </font>"
    }
  }

  render() {
    return (
      <div style={{background:"#d3d3d326", height:"100vh"}}>
        <div className="container">
        <div >
        <img className="backimg" src={webdesign} height="400px" width="400px"/>
        </div>
          <div className="login-panel">
            <div className="login-header">
             <div className="input">
             <h1>Login</h1>
             <input type="text" className="inputText" placeholder="Enter Username" onChange={this.handleEmailChange.bind(this)}></input>
             <input type="password" className="inputText" placeholder="Enter Password" onChange={this.handlePasswordChange.bind(this)}></input>
             <p id="error"></p>

             </div>
             <div className="button">
             <button className="btn" onClick={this.handleSubmit}>Login</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
