import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import DisplayEarthImage from './DisplayEarthImage'

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


const baseUrl = "https://api.nasa.gov/planetary/earth/assets?"
const apiKey = "U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35"

const GetEarthImage = ({ latitude, longitude }) => {
    const [imageUrl, setImageUrl] = useState()
    const [imageDate, setImageDate] = useState()

    const apiUrl = `${baseUrl}lon=${longitude}&lat=${latitude}&date=2021-03-01&&dim=0.10&api_key=${apiKey}`
    console.log(apiUrl)

    const fetcher = () => {
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async res => {
                try {
                    const data = await res.json()
                    setImageUrl(data.url)
                    setImageDate(data.date)
                } catch (err) {
                    console.log('error happened here');
                    console.error(err)
                }
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetcher()
    }

    const classes = useStyles();

    return (
        <div>
            <main className={classes.content}>
                <Toolbar />
                <Typography paragraph className='homeHeader'>
                    <h1>Satellite</h1>
                </Typography>
                <Typography paragraph className='homeParagraph'>
                    Click below for a satellite image of your location
                </Typography>
                <Typography paragraph>
                    <div className={classes.root}>
                        <ButtonBase
                            onClick={(e) => handleSubmit(e)}
                            focusRipple
                            key='Satelitte Image'
                            className={classes.image}
                            focusVisibleClassName={classes.focusVisible}
                            style={{
                                width: '40%',
                            }}
                        >
                            <span
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: 'url(https://images.unsplash.com/photo-1534996858221-380b92700493?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80)',
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
                                    Satellite Image
                                    <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                        </ButtonBase>
                    </div>
                </Typography>
            </main>

            <div className={classes.content}>
                <DisplayEarthImage
                    imageUrl={imageUrl}
                    imageDate={imageDate}
                    latitude={latitude}
                    longitude={longitude}
                />
            </div>
        </div>
    )
}

export default GetEarthImage

