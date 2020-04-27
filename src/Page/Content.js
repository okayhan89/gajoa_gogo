import React, { Component } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ContentComponent from "../Component/ContentComponent"


class Content extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      pageNum: 1,
      pageSize: 20,
      sort: "regDate",
      url : "http://198.13.47.188:8080/agenda/api/v1/agenda?"
     }
    
    this.state = {
      contactData: [
        { title: "title", thumbnail: "http://down.humoruniv.org/hwiparambbs/data/pdswait/a_wd03149001_a714a238ff34ca8f788377b3aca092e6b9bf493f.jpg" }
      ]
    };
  }


  componentDidMount() {
    console.log("componentDidMount");
    this.info();
  }


  info = async () => {
    console.log("info");
    
    //URL 초기화
    this.state.pageNum = 0
    this.state.pageSize = 20
    this.state.sort = "regDate"
    this.state.url = "http://198.13.47.188:8080/agenda/api/v1/agenda?"+
    "pageNum="+this.state.pageNum+"&"+
    "pageSize="+this.state.pageSize+"&"+
    "sort="+this.state.sort;
    console.log(this.state.url)


    var res = await axios.get(this.state.url)
      .catch(function (error) {
        console.log('Network Error');
        console.log(error);

      });

    var tmparr = [];
    var tmpobj = {};
    try {
      if (res.data.length !== 0) {
        for (var cnt = 0; cnt < res.data.length; cnt++) {
          tmpobj = { 'title': res.data[cnt].subject, 'thumbnail': res.data[cnt].thumbnail, 'id': res.data[cnt].id };
          // tmpobj = {'title': res.data[a].subject, };
          // tmpobj1 = {'thumbnail': res.data[a].thumbnail };
          tmparr.push(tmpobj);
        }
        this.setState({
          contactData: tmparr
        });
      }

    } catch (e) {
      console.log(e);
    }

  }

  render() {
    return (
      <Container maxWidth="lg">
        <CssBaseline />
        {this.state.contactData.map((contact, i) => {
          return (<ContentComponent title={contact.title}
            thumbnail={contact.thumbnail}
            id={contact.id}
            key={i}
          />);
        })}
      </Container>
    );
  }
}

export default Content;

