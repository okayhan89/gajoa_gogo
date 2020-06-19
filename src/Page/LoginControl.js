import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from "../Component/LoginButton"
// import { Navbar, Nav, NavLink, Button } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import SignIn from './SignIn';
// function LoginButton(props) {
//   console.log(props.isLoggedIn);
//     return (
//       // <NavLink href="/signin" >로그인</NavLink>
//       <button class="btn btn-sm btn-outline-secondary" onClick={props.onClick}>
//         login
//         {/* <a href="/signin" isLoggedIn={props.isLoggedIn}>로그인</a> <p>hihihihi</p> */}
//         {/* <Link
//                     to={location => ({
//                         pathname: "/signIn",
//                          state: {
//                           isLoggedIn: props.isLoggedIn,
//                         //     title: this.props.title,
//                         //     thumbnail: this.props.thumbnail
//                          }
//                     })}
//          >로그인</Link> */}
//       </button>
//     );
//   }
  
  function LogoutButton(props) {
    return (
      <button class="btn btn-sm btn-outline-secondary" onClick={props.onClick}>
        Logout
      </button>
    );
  }
class LoginControl extends React.Component {
    constructor(props) {
      console.log("LoginControl");
      super(props);
      console.log(this.props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: props.isLoggedIn};
    }
  
    handleLoginClick() {
      console.log("handleLoginClick");
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }

    componentDidMount(){
      console.log("LoginControl componentDidMount");
    }

    test(){
      console.log("LoginControl test");
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      let test;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
        test = <Test onClick={this.handleLoginClick} isLoggedIn={this.state.isLoggedIn} />;
      }
  
      return (
        <div>
          {/* <Greeting isLoggedIn={isLoggedIn} /> */}
          {button}
          
          {/* <SignIn onClick={this.handleLoginClick} isLoggedIn={this.state.isLoggedIn} /> */}
          <div>{test}</div>
        </div>
      );
    }
  }
  
 export default LoginControl;

 class Test extends React.Component{
   render(){
     return (
       <button onClick={this.props.test}>!!!!!!</button>
     )
   }
 }