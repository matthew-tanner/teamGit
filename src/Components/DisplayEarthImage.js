import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },

});

const DisplayEarthImage = ({ imageUrl, imageDate, latitude, longitude, showImg }) => {
    const classes = useStyles();

    const displayReady = () => {
        if (showImg) {
            return (
                <Container maxWidth="sm">
                    <Card className={classes.root} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Satellite Image"
                                height="300"
                                image={imageUrl}
                                title="Satellite Image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Your Current Location
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Image taken by NASA's Landsat 8 satelite on
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {imageDate}.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Latitude = {latitude} and Longitude = {longitude}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Container>


            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }

    return (
        <div>
            {displayReady()}
        </div>

    );
}

export default DisplayEarthImage