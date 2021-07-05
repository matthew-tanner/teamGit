import React from "react";
// import styled from 'styled-components'

// const TicketMaster = styled.img`
// width: calc(100% - 20px);
// height: calc(100% - 20px);
// margin: 10px 10px 0 10px'
// `
const TicketMasterDisplay = ({ events }) => {

  const rows = []

  const eventMap = () => {
    return events.map((event, index) => {
      return rows.push({
        id: index,
        col1: event.name,
        col2: event.distance,
        col3: event.time,
        col4: event.dates.start.localDate,
        col5: <a href={event.url}>Click Here for Tickets</a>,
        col6: <img src={event.images[0].url} />,
      });
    });
  };
  return (
    <>
      {eventMap()}
    </>
  );
};

export default TicketMasterDisplay;
