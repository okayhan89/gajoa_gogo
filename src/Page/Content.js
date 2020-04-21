import React, { Component } from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import { Button } from 'reactstrap';
import axios from 'axios';
// import { render } from '@testing-library/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

let title = "Title";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '25.100%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

class Content extends Component {

  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = { data: [] }
    makeStyles();

    this.state = {
      contactData: [
        { name: "Abet", phone: "010-0000-0001" },
        { name: "Betty", phone: "010-0000-0002" },
        { name: "Charlie", phone: "010-0000-0003" },
        { name: "David", phone: "010-0000-0004" }
      ],
      contactData1: [
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
      console.log('Network Error');
    });
    
    var tmparr= [];
    var tmpobj = {};
    for(var a = 0 ; a < res.data.length ; a++ ){
      tmpobj = {'title': res.data[a].subject, 'thumbnail': res.data[a].thumbnail  };
      // tmpobj1 = {'thumbnail': res.data[a].thumbnail };
      tmparr.push(tmpobj);
    }
    this.setState({
      contactData1:tmparr
    });

  }

  render() {
    console.log('render');

    return (
      <Container maxWidth="lg">
        <CssBaseline />
        <ul>
          {this.state.contactData1.map((contact, i) => {
            return (<CardInfo title={contact.title}
              thumbnail={contact.thumbnail}
              key={i}
            />);
          })}
        </ul>
      </Container>
    );
  }
}

export default Content;


class CardInfo extends React.Component {
  
  render() {
    
    return (

      <Container maxWidth="lg">
        <Card  >
          {/* 컨텐츠 제목 */}

          <li>{this.props.title}</li>

          <CardHeader

            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={this.props.title}
            // title={this.props.title}
            subheader="누구랑 사귈레? 2020.02.21"
          />

          {/* 컨텐츠 이미지 */}
          <CardMedia
            style={{ paddingTop: '50.100%'}}
            //image="http://down.humoruniv.org/hwiparambbs/data/pdswait/a_wd03149001_a714a238ff34ca8f788377b3aca092e6b9bf493f.jpg"
            image={this.props.thumbnail}
            title="이미지 타이틀"
          />

          {/* 컨텐츠 설명 */}
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              김태희 백억자산가 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </Typography>
          </CardContent>


          {/* 아이콘 */}
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon > </FavoriteIcon>
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>

        </Card>
        <hr></hr>
      </Container>
    );
  }
}