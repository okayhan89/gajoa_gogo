import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
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
      }
    

    handleLogin = async () => { 

        console.log("로그인 버튼 클릭");
        //URL 초기화
        
        this.state.url = "http://localhost:8080/login/api/v1/login" 
        


        var res = await axios.get(this.state.url)
            .catch(function (error) {
                console.log('Network Error');
                console.log(error);
                console.log("해당 로직은 비로그인상태라면 ~~ 에서 넣으면 되는 로직");
            });

        var tmparr = [];
        var tmpobj = {};
        try {
            
            //로그인버튼 클릭시, 해당 데이터가 없었을 경우
            if (res.data.length !== 0) {
                for (var cnt = 0; cnt < res.data.length; cnt++) {
                    tmpobj = {
                        'id': res.data[cnt].id,
                        'email': res.data[cnt].email
                    };
                    // tmpobj = {'title': res.data[a].subject, };
                    // tmpobj1 = {'thumbnail': res.data[a].thumbnail };
                    tmparr.push(tmpobj);
                }
                this.setState({
                    contactData: tmparr
                });
            }
            //로그인버튼 클릭시, 비로그인상태라면
            else {

            }
            

        } catch (e) {
            console.log(e);
            
        }
    }

    render() {
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
                            <PersonIcon onClick={this.handleLogin} />
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
