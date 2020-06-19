import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class SignIn extends React.Component {

  constructor(props) {
    console.log("sigIN----");
    super(props);
    console.log(props);
    console.log(props.handleLoginClick);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // console.log(this.props.location.state.isLoggedIn);
    // this.handleLogin = this.handleLogin.bind(this);
    
    // this.state = {isLoggedIn: props.location.state.isLoggedIn};
    // this.props.componentDidMount = this.componentDidMount.bind(this);
    // this.state = {isLoggedIn: props.isLoggedIn};
    // console.log("signIn is login ? : "+ props.isLoggedIn);
  }

  test(){
    console.log("test ch");
    // console.log(this.props);
  }

  componentDidMount(){
    console.log("SignIn componentDidMount");
    // con
    // this.handleLogin();
  }

  componentWillMount(){
    console.log("SignIn componentWillMount");
}

  handleLogin(){
    // this.state.isLoggedIn = true;
    // console.log(this.props.history.location.state.isLoggedIn);
    console.log("handleLogin");
    console.log(this.state);
    // console.log(this.state.isLoggedIn);
    this.setState({isLoggedIn: true});
    // console.log(this.state.isLoggedIn);
    // this.props.location.state.isLoggedIn = true;
    console.log(this.state);
    // this.state.isLoggedIn = true;
    // console.log(this.state.isLoggedIn);
    // console.log(this.props.test);
    // console.log(this.props);
    //this.props.componentDidMount();
    // window.location.reload(false);
  }

  render() {
    // const isLoggedIn = this.state.isLoggedIn;
    // console.log(this.props.history.location.state.isLoggedIn);
    // console.log(this.props.location.state.isLogged);
    return (
      <Container maxWidth="lg">
        <Card>
          <CardContent mt={8}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div>
                <Avatar>
                  <LockOutlinedIcon />
                </Avatar>
                <button onClick={this.props.test}>hihi</button>
                <button onClick={this.props.handleLoginClick}>handleLogin</button>
                <Typography component="h1" variant="h5">
                  GaJoA 로그인
                       </Typography>
                <form noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.handleLogin}
                  >
                    Sign In
                           </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                               </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>

            </Container>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default SignIn;