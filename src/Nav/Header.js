import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavLink, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Home from "./Home";
import Vote from "../Page/Vote";
import Board from "../Page/Board";
import SignIn from "../Page/SignIn";
import SignUp from "../Page/SignUp";
import CreateContent from '../Page/CreateContent';
import PersonIcon from '@material-ui/icons/Person';
import axios from 'axios';


class Header extends React.Component {


    constructor(props) {
        super(props);
        this.state = { 
          url : "http://198.13.47.188:8080/agenda/api/v1/agenda?"
         }
        this.handleLogin();
      }
    

    handleLogin = async () => { 

        console.log("로그인 버튼 클릭");
        //로그인 되었을 경우
        // this.state={
        //     id: "yeobi",
        //     email: "yeobi@test.co.kr" 
        // }
        
        //비로그인일 경우
        this.state={
            id: "로그인",
            email: "" ,
            icon : "<PersonIcon></PersonIcon>"
        }
      
        
    }

    render() {
        let test = "<b><PersonIcon/></b>";
        return (
            <Router>
                <Container maxWidth="lg">
                    <Toolbar style={{ borderBottom: '1px solid' }}>
                        <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap
                            style={{ flex: 1 }}
                        >
                            WengAl-WengAl
                    </Typography>
                        <IconButton>
                            <NavLink href="/signin" >
                                {/* <PersonIcon></PersonIcon> */}
                                <Button>{this.state.id}</Button>
                                {/* <div dangerouslySetInnerHTML={ {__html: this.state.id }}></div> */}
                            </NavLink>
                        </IconButton>
                    </Toolbar>

                    <Toolbar component="nav" variant="dense" style={{ justifyContent: 'space-between', overflowX: 'auto' }}>
                        <Navbar>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavLink href="/" >Home</NavLink>
                                    <NavLink href="/board" >Board</NavLink>
                                    <NavLink href="/signin" >Signin</NavLink>
                                    <NavLink href="/signup" >Signup</NavLink>
                                    <NavLink href="/createContent" >게시글등록</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Toolbar>

                </Container>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/vote" component={Vote}></Route>
                    <Route path="/board">
                        <Board />
                    </Route>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/createContent">
                        <CreateContent />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
export default Header;
