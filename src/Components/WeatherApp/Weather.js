import React, { useState, useEffect } from 'react'
import WeatherResults from './WeatherResults'
// import ComplexButton from './ComplexButton';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
//

const images = [
    {
    url: 'https://images.unsplash.com/photo-1462524500090-89443873e2b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Local Weather Conditions',
    width: '40%',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
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
    const [search, setSearch] = useState('')
    const [temp, setTemp] = useState('')
    const [sunrise, setSunrise] = useState('')
    const [sunset, setSunset] = useState('')
    const [description, setDescription] = useState('')
    const [showSelection, setShowSelection] = useState(false)

    const url = `${baseUrl}lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`
    
    const fetchWeather = () => {
        fetch (url).then( async res => {
            try {
                const data = await res.json()
                
                console.log(data)
                console.log(data.main.temp)
                console.log(data.sys.sunrise)
                console.log(data.sys.sunset)
                console.log(data.weather[0].description)
                setTemp(data.main.temp)
                setDescription(data.weather[0].description)
                setSunrise(data.sys.sunrise)
                setSunset(data.sys.sunset)
            } catch(err) {
                console.log('error')
            }
        })
    }
    // fetchWeather()

    // const mapUrl = `https://openweathermap.org/weathermap?basemap=map&cities=false&layer=temperature&lat=${latitude}&lon=${longitude}&zoom=5&appid=${key}`

    // const mapUrl = `https://tile.openweathermap.org/map/temp_new.png?appid=${key}`



    // const fetchWeatherMap = () = {
    //     fetch 
    // }

    let [forecast, setForecast] = useState({})

    const fetchForecast = () => {
        fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&exclude=current,minutely,hourly,alerts&units=imperial&lon=${longitude}&appid=${key}`)
        .then( async res => {
            try {
                const dataF = await res.json()
                console.log(dataF)
            } catch(err) {
                console.log('error')
            }
        })
     }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchWeather()
        console.log(fetchForecast())
        setShowSelection(true)
    }

    const classes = useStyles();
    
        return(
            <div>
                <main className={classes.content}>
                    <Toolbar/>
                    <Typography paragraph className='homeHeader'>
                        <h1>Weather</h1>
                    </Typography>
                    <Typography paragraph className='homeParagraph'>
                        Click below to find local weather conditions.
                    </Typography>
                    <Typography paragraph>
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
                    </Typography>
                </main>

                <div className={classes.content}><WeatherResults temp={temp} sunrise={sunrise} sunset={sunset} description={description} showSelection={showSelection} /></div>
            </div>
        )
    }
    
    export default Weather