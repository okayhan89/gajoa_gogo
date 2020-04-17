import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, NavDropdown, FormControl, NavLink } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Home from "./Home";
import About from "../Page/About";
import Board from "../Page/Board";
import SignIn from "../Page/SignIn";


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

const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];

export default function Header(props) {
    const classes = useStyles();

    const { sections } = props;
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
                                <NavLink href="/about" >About</NavLink>
                                <NavLink href="/board" >Board</NavLink>
                                <NavLink href="/signin" >Signin</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Toolbar>

            </Container>
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
                    <SignIn />
                </Route>
            </Switch>
        </Router>
    );
}
