import React from 'react';
import App from './App';
import Login from "./Component/Login";
import User from "./Component/User";
import UserInfo from './UserInfo';
import { shallow } from 'enzyme';

describe("rendering components", () =>{
  it("should render Login component without crashing", () => {
    shallow(<Login />);
  });
  it("should render App component without crashing", () => {
    shallow(<App />);
  });
  it("should render UserInfo component without crashing", () => {
    shallow(<UserInfo />);
  });
  it("should render User component without crashing", () => {
    shallow(<User />);
  });
});

describe("check data which is rendering", () =>{
   it("should render component in debug mode", () =>{
     const component = shallow(<UserInfo debug/>);
     expect(component).toMatchSnapshot();
   })
})