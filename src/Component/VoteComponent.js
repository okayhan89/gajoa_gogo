import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
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
        }
    }),
);

function hi(){
    alert("hi");
}

function VoteComponent(props){

    //const classes = useStyles();
    console.log("vv")
    console.log(props)
    return(
        <Container maxWidth="lg">
        <CssBaseline/>
        <Card>
             <CardHeader
                   
                    title="TITLE HEADER"
                    // title={this.props.title}
                    subheader="sub header"
                />
                <CardMedia
                    style={{ paddingTop: '100.100%' }}
                    image="http://down.humoruniv.org/hwiparambbs/data/pdswait/a_wd03149001_a714a238ff34ca8f788377b3aca092e6b9bf493f.jpg"
                    //image={this.props.thumbnail}
                    title="이미지 타이틀"
                    //onClick={this.actionCard}
                ></CardMedia>
        </Card>
        </Container>
    );
}

export default VoteComponent;