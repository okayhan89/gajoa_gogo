import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Navbar, Nav, NavLink } from 'react-bootstrap';
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

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

const title = "WengAl-WengAl";

export default function Header(props) {
    const classes = useStyles();

    return (
        <Router>
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        {title}
                    </Typography>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Toolbar>

                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    <Navbar>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavLink href="/" >Home</NavLink>
                                <NavLink href="/board" >Board</NavLink>
                                <NavLink href="/signin" >Signin</NavLink>
                                <NavLink href="/signup" >Signup</NavLink>
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
            </Switch>
        </Router>
    );
}
