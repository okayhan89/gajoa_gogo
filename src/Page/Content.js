import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ContentComponent from "../Component/ContentComponent"


class Content extends Component {

  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = { data: [] }
    makeStyles();

    this.state = {
      contactData: [
        { title: "title", thumbnail: "http://down.humoruniv.org/hwiparambbs/data/pdswait/a_wd03149001_a714a238ff34ca8f788377b3aca092e6b9bf493f.jpg" }
      ]
    };

  }

  componentWillMount() {
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.info();
  }


  info = async () => {
    console.log("info");
    var res = await axios.get('http://198.13.47.188:8080/v1/card/')
      .catch(function (error) {
        console.log('Network Error');
      });

    var tmparr = [];
    var tmpobj = {};

    if (res.data.length != 0) {
      for (var cnt = 0; cnt < res.data.length; cnt++) {
        tmpobj = { 'title': res.data[cnt].subject, 'thumbnail': res.data[cnt].thumbnail };
        // tmpobj = {'title': res.data[a].subject, };
        // tmpobj1 = {'thumbnail': res.data[a].thumbnail };
        tmparr.push(tmpobj);
      }
      this.setState({
        contactData: tmparr
      });
    }

  }

  render() {
    console.log('render');

    return (
      <Container maxWidth="lg">
        <CssBaseline />  
            {this.state.contactData.map((contact, i) => {
              return (<ContentComponent title={contact.title}
                thumbnail={contact.thumbnail}
                key={i}
              />);
            })}
      </Container>
    );
  }
}

export default Content;

