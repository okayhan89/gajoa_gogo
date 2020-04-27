import React, { createContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CreateContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: 'test',
            contents: 'test',
            subject: 'test',
            register: 'test',
            versus1: 'test',
            versus2: 'test'
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this)
    }

    handleFormSubmit(e) {
        axios.post(`http://198.13.47.188:8080/agenda/api/v1/agenda`, {
            headers: {
                'Content-type': 'application/json',
            },
            category: this.state.category,
            contents: 'test',
            subject: this.state.subject,
            register: 'test',
            versus1: 'test',
            versus2: 'test',
        }).then(response => {
            console.log('response', JSON.stringify(response, null, 2))
        }).catch(error => { console.log('failed', error) })

    }
    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }


    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div >
                    <form onSubmit={this.handleFormSubmit}>
                        테스트 제목: <input type="text" name="subject" value={this.state.subject} onChange={this.handleValueChange} /><br />
                        <button type="submit">게시글추가</button>
                    </form>
                </div>

            </Container>
        );
    }
}
export default CreateContent;