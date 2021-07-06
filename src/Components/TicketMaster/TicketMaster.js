import React, {useState, useEffect} from 'react' 
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import ButtonBase from '@material-ui/core/ButtonBase';
import Geohash from 'latlon-geohash'
import TicketMasterDisplay from './TicketmasterDisplay'
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';

const images = [
  {
  url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  title: 'Local Events',
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
        height: 300
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

let TicketMaster = ({latitude, longitude}) => {
    const [events, setEvents] = useState([])
    const classes = useStyles();
    const [showSelection, setShowSelection] = useState(false)

    const fetchTicketMaster = () => {
        console.log(latitude, longitude);
        const geo = Geohash.encode(latitude, longitude, 4)
        console.log(geo);
        fetch (`https://app.ticketmaster.com/discovery/v2/events.json?&geoPoint=${geo}&apikey=lW1m9JXhPGuTVFc9OgbCKeqsPMg9qGTB`)
        .then(async res => {
            try {
                const json = await res.json()
                const data = json._embedded.events
                console.log(data)
                setEvents(data)
            } catch (err) {
                console.error(err);
            }
        })
    }
    
    useEffect(() => {
      fetchTicketMaster();
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault()
      fetchTicketMaster()
      setShowSelection(true)
    }
  
    return(
    <>
    
    <div className={classes.root}>
      <main className={classes.content}>
              <Toolbar />
              {/* <Container> */}
              <Typography variant="h3" className='card-header'>Events</Typography>

              <Typography paragraph className='homeParagraph'>
                  Click below to find events in your area.
              </Typography>
                        {images.map((image) => (
                            <ButtonBase
                            onClick={fetchTicketMaster}
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
                        {/* </Container> */}
                        </main>
                        </div>
    
    {/* <ButtonBase onClick={fetchTicketMaster} style={{ display: "flex", height: 300 }}>Search</ButtonBase> */}

    <TicketMasterDisplay showSelection={showSelection} events={events} />

    </>
)
}

export default TicketMaster
