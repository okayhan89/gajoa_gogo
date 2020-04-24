import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from '@material-ui/core/CardActionArea';
import {  Link } from 'react-router-dom';

class ContentComponent extends React.Component {

    
    constructor(props) {
        console.log('constructor----');
        super(props);
        console.log(props);
        this.state={
            url: "/"
        }
    }

    componentDidMount() {
        console.log("componentDidMount");

    }
    

    

    render() {
        console.log("render");
        return (
            <Card style={{ marginBottom: '20px' }}>
                {/* 컨텐츠 제목 */}
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={this.props.title}
                    // title={this.props.title}
                    subheader="sub header"
                />
                
                {/* 컨텐츠 이미지 */}
                {/*<a href={this.state.url} params={{url: "hi"}}>*/}
                <CardActionArea>
                <Link
                    to={location => ({
                        pathname: "/vote",
                        state: {
                            id: "this.state.id",
                            title: this.props.title,
                            thumbnail: this.props.thumbnail
                        },
                    })}
                >
                <CardMedia
                    style={{ paddingTop: '50.50%' }}
                    //image="http://down.humoruniv.org/hwiparambbs/data/pdswait/a_wd03149001_a714a238ff34ca8f788377b3aca092e6b9bf493f.jpg"
                    image={this.props.thumbnail}
                    title="이미지 타이틀"
                   // onClick={this.actionCard}
                >
                </CardMedia>      
                </Link>

                {/* 컨텐츠 설명 */}
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        간단한 컨텐츠 설명
                     </Typography>
                </CardContent>
                </CardActionArea>

                {/* 아이콘 */}
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon > </FavoriteIcon>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card >
  
            
        );
    }
}

export default ContentComponent;
