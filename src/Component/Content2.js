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
    

let title = "Title";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 1000,
        },
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


    constructor(props){
        console.log('constructor');
        super(props);
        this.state = {data: []}
        // makeStyles();
        
    }

    componentWillMount (){
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.titlefn();
    }

    titlefn = async () => {
		console.log("titlefn");
        var response = await axios.get('http://198.13.47.188:8080/v1/card/')
        .catch(function (error){
            console.log('Network Error');
        });
 		this.setState({
			...this.state,
			title: (response == null ? 'Title' : response.data[0].subject),
        });
	}
    
    
    render() {
        console.log('render');

        // const classes = 'hi this is classes';
        // console.log(classes);

        
        // const classes = useStyles();
        // const [expanded, setExpanded] = React.useState(false);

        // const handleExpandClick = () => {
        //     setExpanded(!expanded);
        // };



        return (
            <Card style = {{ backgroundColor: 'green' }} >
                {/* 컨텐츠 제목 */}
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" >
                            경제
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={this.state.title}
                    subheader="누구랑 사귈레? 2020.02.21"
                />


                {/* 컨텐츠 이미지 */}
                <CardMedia
                    
                    //   image="/static/images/cards/paella.jpg"
                    //   image="logo192.png"
                    src="http://localhost:3000/favicon.ico"
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

        );
    }
}

export default Content;