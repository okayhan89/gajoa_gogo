import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Link } from 'react-router-dom';
class LoginButton extends React.Component {
    constructor(props) {
        console.log("Loginbutton");
        super(props);
        // this.handleLoginClick = this.handleLoginClick.bind(this);
        console.log(this.props.isLoggedIn);
    }

    componentDidMount(){
        console.log("LoginButton componentDidMount");
      }

    componentWillMount(){
        console.log("LoginButton componentWillMount");
    }

    
  

    render(){
        console.log("login button");
        console.log(this.props);
      return (
        // <NavLink href="/signin" >로그인</NavLink>
        <button class="btn btn-sm btn-outline-secondary">
          {/* <a href="/signin" isLoggedIn={props.isLoggedIn}>로그인</a> <p>hihihihi</p> */}
          <Link
                      to={location => ({
                          pathname: "/signIn",
                           state: {
                            isLoggedIn: this.props.isLoggedIn,
                          //     title: this.props.title,
                          //     thumbnail: this.props.thumbnail
                           }
                      })}
           >로그인</Link>
        </button>
      );
    }
}

export default LoginButton;