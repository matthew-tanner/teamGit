import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@mdi/react';
import { mdiWeatherSunny } from '@mdi/js';
import { mdiThermometer } from '@mdi/js';
import { mdiThermometerLow } from '@mdi/js';
import { mdiThermometerHigh } from '@mdi/js';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f7fbfc',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        display: 'flex',
        disableGutters: 'true'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    palette: {
        primary: {
            light: '#f7fbfc',
            main: '#d6e6f2',
            dark: '#B9D7EA', 
            contrastText: '#fff',
        },
        secondary: {
            light: '#f7fbfc',
            main: '#d6e6f2',
            dark: '#f85050',
            contrastText: '#000',
        },
    },
}));


const WeatherResults = ({ temp, description, max, min, forecastConditions, outlookMax, outlookMin, outlookConditions, forecast, showSelection }) => {
    const classes = useStyles();
    
    const showDisplay = () => {
        
        if (showSelection === true) {
            return (
                <>
                
            <Container maxWidth="sm">
                <Card className={classes.root}>
                <CardHeader 
                        title="Current Conditions"
                />

                <List className={classes.root}>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <Icon path={mdiThermometer} />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Temperature" secondary={temp} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <Icon path={mdiWeatherSunny} />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Conditions" secondary={description} />
                    </ListItem>
                </List>
                </Card>

            <br />

                <Card className={classes.root}>
                <CardHeader 
                        title="Today's Forecast"
                    />
                <List className={classes.root}>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <Icon path={mdiThermometerHigh} />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="High" secondary={max} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <Icon path={mdiThermometerLow} />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Low" secondary={min} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <Icon path={mdiWeatherSunny} />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Conditions" secondary={forecastConditions} />
                    </ListItem>
                </List>
                </Card>

                <br />
            </Container>

            </>
            
            )
        }  else {
            return (
                <div></div>
            )
        }
    }
    return (
        <div className={classes.root}>
            {showDisplay()}
        </div>
    )
}

export default WeatherResults