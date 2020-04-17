import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: 'blue',
            color: 'black',
        },
        
    }),
);


function hi(){
    alert("hi");
}

function Vote(){

    let title = '누가 이쁘오~?';
    let value = "굳";
    // const classes = useStyles();

    return(
        <Container maxWidth="lg">
      <CssBaseline/>
        <div>
            <div 
                style={{  backgroundColor: 'white', color: 'black'}} onClick={hi}>
                title : 결혼상대로는?
            </div>
            <div
                style={{ backgroundColor: 'green', color: 'black'}}>
                이미지 : 30억오나미 vs 무일푼 김태희
            </div>
            <div
                style={{backgroundColor: 'blue', color: 'black'}}>
                투표결과
            </div>
            <div
                style={{ backgroundColor: 'yellow', color: 'black'}}>
                그래프
            </div>
            <div
                style={{backgroundColor: 'blue', color: 'black'}}>
                하트 / 댓글 / 공유하기
            </div>
            <div
                style={{ backgroundColor: 'white', color: 'black'}}>
                댓글
            </div>
            <div
                style={{ backgroundColor: 'yellow', color: 'black'}}>
                댓글 1 : 머머가 낫지
            </div>
        </div>
        </Container>
    );
}

export default Vote;