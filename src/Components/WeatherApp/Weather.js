import React, { useState } from 'react'
import WeatherResults from './WeatherResults'
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Container } from '@material-ui/core';
//

const images = [
    {
    url: 'https://images.unsplash.com/photo-1462524500090-89443873e2b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Local Weather Conditions',
    width: '100%',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        minWidth: 1161,
        width: '100%',
        alignItems: 'justify',
        justifyContent: 'center !important',
    },
    image: {
        position: 'relative',
        height: '100%',
        [theme.breakpoints.down('xl')]: {
            width: '100% !important', // Overrides inline-style
            height: 500
        },
        '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
            opacity: 0.15,
        },
        '& $imageMarked': {
            opacity: 0,
        },
        '& $imageTitle': {
            border: '4px solid currentColor',
        },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));


// Weather Fetch

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?'
const key = '44f658ecdd6d9bcedddf97d114d8dd9c'


const Weather = ({ latitude, longitude }) => {
    const [temp, setTemp] = useState('')
    const [description, setDescription] = useState('')
    const [showSelection, setShowSelection] = useState(false)
    const [max, setMax] = useState('')
    const [min, setMin] = useState('')
    const [forecastConditions, setForecastConditions] = useState('')

    const url = `${baseUrl}lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`
    
    const fetchWeather = () => {
        fetch (url).then( async res => {
            try {
                const data = await res.json()
                setTemp(Math.round(data.main.temp))
                setDescription(data.weather[0].description)
            } catch(err) {
                console.log('error')
            }
        })
    }

    const fetchForecast = () => {
        fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&exclude=current,minutely,hourly,alerts&units=imperial&lon=${longitude}&appid=${key}`)
        .then( async res => {
            try {
                const dataF = await res.json()
                setMax(Math.round(dataF.daily[0].temp.max))
                setMin(Math.round(dataF.daily[0].temp.min))
                setForecastConditions(dataF.daily[0].weather[0].description)
            } catch(err) {
                console.log('error')
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchWeather()
        fetchForecast()
        setShowSelection(true)
    }

    const classes = useStyles();
    
        return(
            <div className='classes.root'>
                <main className={classes.content}>
                    <Toolbar/>
                    <Container>

                    <Typography variant="h3" className='card-header'>Weather</Typography>

                    <Typography paragraph className='homeParagraph'>
                        Click below to find local weather conditions.
                    </Typography>
                    <div className={classes.root}>
                        {images.map((image) => (
                            <ButtonBase
                            onClick={(e)=> handleSubmit(e)}
                            focusRipple
                            key={image.title}
                            className={classes.image}
                            focusVisibleClassName={classes.focusVisible}
                            style={{
                                width: image.width,
                            }}
                            >
                            <span
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${image.url})`,
                                }}
                                />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>
                                <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={classes.imageTitle}
                                >
                                {image.title}
                                <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                            </ButtonBase>
                            ))}
                        </div>
                            </Container>
                </main>

                <div className={classes.content}><WeatherResults temp={temp} description={description} max={max} min={min} forecastConditions={forecastConditions} showSelection={showSelection} /></div>
            </div>
        )
    }
    
    export default Weather