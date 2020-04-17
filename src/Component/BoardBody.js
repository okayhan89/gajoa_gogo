import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
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
// import {Button} from 'reactstrap';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
// import React from 'react';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 1000,
        },
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
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

function BoardBody() {

    const classes = useStyles();
    return (
        <div>
            <form>
                <div>
                    <Card className={classes.root}>
                        <CardContent style={{ width: '1000px' }}>
                            <p>성별</p>
                            <Radio type="radio" id="male" name="gender" value="male" />
                            <label for="male">Male</label>
                            <Radio type="radio" id="female" name="gender" value="female" />
                            <label for="female">Female</label>
                        </CardContent>
                    </Card>
                    <br></br>
                    <Card className={classes.root}>
                        <CardContent style={{ width: '1000px' }}>
                            <p>나이</p>
                            <input type="text" id="male" name="gender" />
                        </CardContent>
                    </Card>

                    <br></br>
                    <Card className={classes.root}>
                        <CardContent style={{ width: '1000px' }}>
                            <Typography variant="h6" gutterBottom>
                                Payment method
                             </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <TextField required id="cardName" label="Name on card" fullWidth />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField required id="cardNumber" label="Card number" fullWidth />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField required id="expDate" label="Expiry date" fullWidth />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="cvv"
                                        label="CVV"
                                        helperText="Last three digits on signature strip"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                                        label="Remember credit card details for next time"
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>

            </form>
        </div>
    );

}

export default BoardBody;