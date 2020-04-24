import React  from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
//function Vote() {


class Vote extends React.Component {
//const Vote =({match}) => {
 
  render(){
    console.log(this.props)
    return (
      <Container maxWidth="lg">
      <CssBaseline/>
      <Card>
           <CardHeader
                 
                  title={this.props.location.state.title}
                  // title={this.props.title}
                  subheader="sub header"
              />
              <CardMedia
                  style={{ paddingTop: '100.100%' }}
                  image={this.props.location.state.thumbnail}
                  //image={this.props.thumbnail}
                  title="이미지 타이틀"
                  //onClick={this.actionCard}
              ></CardMedia>
      </Card>
      </Container>
    );
  }
}

export default Vote;
