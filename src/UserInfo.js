import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Row, Col, Button } from "antd";
import User from "./Component/User";
import axios from "axios";
import "antd/dist/antd.css";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ userData: response.data });
    console.log(window.localStorage);
  }

  deleteUser = (id) => {
    this.setState((prevState) => ({
      userData: prevState.userData.filter((ele) => ele.id !== id),
    }));
  };

  updateUserData = (id, data) => {
    this.setState((prevState) => ({
      userData: prevState.userData.map((ele) => {
        if (ele.id === id) return { ...ele, ...data };
        return ele;
      }),
    }));
  };

  logout = () => {
    window.localStorage.setItem("token", "");
    window.location.replace("/login");
  };

  render() {
    const { userData } = this.state;

    if (userData.length === 0) {
      return (
        <div>
          <div className="spinner">
            <div className="bounce1" />
            <div className="bounce2" />
            <div className="bounce3" />
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
      
          
            <div>
              <Button className="logout" onClick={this.logout}>
                Logout
              </Button>
              <Row>
                {userData.map((user) => (
                  <Col xs={24} sm={24} md={8} lg={8} xl={6} key={user.username}>
                    <User
                      user={user}
                      deleteUser={this.deleteUser}
                      updateUserData={this.updateUserData}
                    />
                  </Col>
                ))}
              </Row>
            </div>
      </React.Fragment>
    );
  }
}

export default App;
