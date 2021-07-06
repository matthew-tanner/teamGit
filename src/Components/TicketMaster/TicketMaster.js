import React, { useState } from "react";
import Geohash from "latlon-geohash";
import Toolbar from "@material-ui/core/Toolbar";
import TicketMasterDisplay from "./TicketmasterDisplay";

let TicketMaster = ({ latitude, longitude }) => {
  const [events, setEvents] = useState([]);

  const fetchTicketMaster = () => {
    console.log(latitude, longitude);
    const geo = Geohash.encode(latitude, longitude, 5);
    console.log(geo);
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?&geoPoint=${geo}&apikey=lW1m9JXhPGuTVFc9OgbCKeqsPMg9qGTB`
    ).then(async (res) => {
      try {
        const json = await res.json();
        const data = json._embedded.events;
        console.log(data);
        setEvents(data);
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <>
    <Toolbar />
      <span>Search for Events in Your Area</span>

      <button onClick={fetchTicketMaster}>Search</button>

      <TicketMasterDisplay events={events} />
    </>
  );
};

export default TicketMaster;
