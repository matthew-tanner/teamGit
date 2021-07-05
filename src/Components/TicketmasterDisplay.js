import React from 'react'
// import styled from 'styled-components'

// const TicketMaster = styled.img`
// width: calc(100% - 20px);
// height: calc(100% - 20px);
// margin: 10px 10px 0 10px'
// `
const TicketMasterDisplay = ({events}) => {
       const eventMap = () => {
       return events.map((event, index) => {
              return (
                     <>
                     <p>Event: {event.name}</p>
                     <p>{event.distance}</p>
                     <p>{event.time}</p>
                     <p>{event.dates.start.localDate}</p>
                     <p>{event.dates.start.localTime}</p>
                     <a href={event.url}>Click Here for Tickets</a>
                     <img src={event.images[0].url} />
                     </>   
              )
       })
       }
return(
       <>       
       {eventMap()}
       //Make a table with headings and data display 
       </>
)


}

export default TicketMasterDisplay
