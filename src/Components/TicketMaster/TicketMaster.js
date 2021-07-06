import React, {useState, useEffect} from 'react' 
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import ButtonBase from '@material-ui/core/ButtonBase';
import Geohash from 'latlon-geohash'
import TicketMasterDisplay from './TicketmasterDisplay'


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "100%"
  },
  palette: {
    primary: {
      light: '#c7dfee',
      main: '#b9d7ea',
      dark: '#8196a3', 
      contrastText: "#fff",
    },
    secondary: {
      light: '#f97373',
      main: '#f85050',
      dark: '#ad3838',
      contrastText: "#000",
    },
  },
  button: { 
    color: "#fff",
    margin: 75,
    padding: 30,
    border: '5px solid #8196a3', 
    // display: "flex", 
    width: '20%', 
    height: '100%', 
    alignSelf: 'center',
    backgroundColor: theme.palette.primary.main, 
  }
}));

let TicketMaster = ({latitude, longitude}) => {
    const [events, setEvents] = useState([])
    const classes = useStyles();

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
  
    return(
    <div style={{margin: '100px 0', width: '900px', display: 'flex', flexDirection: 'column'}}>
    <span>Get Events in Your Area:</span>
    
    <ButtonBase className={classes.button} onClick={fetchTicketMaster}>Local Events</ButtonBase>

    <TicketMasterDisplay events={events} />

    </div>
)
}

export default TicketMaster
