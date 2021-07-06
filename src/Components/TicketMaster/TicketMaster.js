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
      light: "#f7fbfc",
      main: "#d6e6f2",
      dark: "#B9D7EA",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f7fbfc",
      main: "#d6e6f2",
      dark: "#f85050",
      contrastText: "#000",
    },
  },
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
    <>
    <span>Search for Events in Your Area</span>
    
    <ButtonBase onClick={fetchTicketMaster} style={{ display: "flex", height: 300 }}>Search</ButtonBase>

    <TicketMasterDisplay events={events} />

    </>
)
}

export default TicketMaster
