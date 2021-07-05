import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import unsplashMap from '../assets/unsplashMap.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
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

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <main className={classes.content}>
                <Toolbar/>
                <Typography paragraph className='homeHeader'>
                    <h1>What's Local?</h1>
                </Typography>
                <Typography paragraph className='homeParagraph'>
                    Stay up to date on events, weather, and NASA data in your area with just a few easy clicks.
                </Typography>
                <Typography paragraph>
                    <img className='unsplash-map' src={unsplashMap} />
                </Typography>
            </main>
        </div>
    )
}

export default Home