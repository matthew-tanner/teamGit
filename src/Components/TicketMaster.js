import React, {useState, useEffect} from 'react' 


let TicketMaster = ({latitude, longitude}) => {
    const [events, setEvents] = useState('')
    
    
    const fetchTicketMaster = () => {
        fetch (`https://app.ticketmaster.com/discovery/v2/events.json?&apikey=9UZfn5AejyvWZ8b3rBxZtRDmRg2haMAH`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

    }
    fetchTicketMaster()

    return(
    <>
        <p>success</p>
    </>
)
}

export default TicketMaster
