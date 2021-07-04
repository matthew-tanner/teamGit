import React, { useState, useEffect } from "react";
import Geohash from "latlon-geohash";
import TicketMasterDisplay from "./TicketmasterDisplay";

let TicketMaster = ({ latitude, longitude }) => {
  const [events, setEvents] = useState([]);
  //I need to do some sort of logic incorporating the id of the event with the url.
  //So may mapping (event => something )

  // useEffect(() => {
  //     const geo = Geohash.encode(latitude, longitude, 5)
  //     fetch (`https://app.ticketmaster.com/discovery/v2/events.json?&geoPoint=${geo}&apikey=lW1m9JXhPGuTVFc9OgbCKeqsPMg9qGTB`)
  //     .then(res => {
  //         console.log(res.json())
  //     .then(data => setLocalEvents(data._embedded.events))
  //         // setLocalEvents(res._embedded)
  //         })
  //     .catch(err => console.log(err))
  // })

  const fetchTicketMaster = () => {
    console.log(latitude, longitude);
    const geo = Geohash.encode(latitude, longitude, 6);
    console.log(geo);
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?&geoPoint=${geo}&apikey=lW1m9JXhPGuTVFc9OgbCKeqsPMg9qGTB`
    ).then((res) => res.json())
    .then(data => {
      setEvents(data);
      console.log(data._embedded.events);
    })
  };

  return (
    <>
      <span>Search for Events in Your Area</span>

      <button onClick={fetchTicketMaster}>Search</button>

      <TicketMasterDisplay events={events} />
    </>
  );
};

export default TicketMaster;
