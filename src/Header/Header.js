import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, NavDropdown, FormControl, NavLink } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "../Page/Home";
import About from "../Page/About";
import Board from "../Page/Board";
import SignInTest from "../Page/SignInTest";

const Header = () => (
    <Router>
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="#home">왱알왱알</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink href="/" >Home</NavLink>
                        <NavLink href="/about" >About</NavLink>
                        <NavLink href="/board" >Board</NavLink>
                        <NavLink href="/signin" >Signin</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/board">
                    <Board />
                </Route>
                <Route path="/signin">
                    <SignInTest />
                </Route>
            </Switch>
        </div>
    </Router>
)

export default Header;

