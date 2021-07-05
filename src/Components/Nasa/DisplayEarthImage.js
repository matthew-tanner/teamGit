import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },

});

const DisplayEarthImage = ({ imageUrl, imageDate, latitude, longitude }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Satellite Image"
                    height="500"
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
    );
}

export default DisplayEarthImage


