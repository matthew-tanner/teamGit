import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    "& .grid-header": {
      backgroundColor: "rgba(255, 7, 0, 0.55)",
      font: '20px bold',
      color: 'white',
    }
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    margin: 'auto',
    width: "100%",
    height: 400,
    
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

const TicketMasterDisplay = (props) => {
  const classes = useStyles();
  const rows = [];
  const columns = [
    {
      field: "col1",
      headerName: "Events",
      headerClassName: "grid-header",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "col2",
      headerName: "Distance",
      headerClassName: "grid-header",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "col3",
      headerName: "Time",
      headerClassName: "grid-header",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "col4",
      headerName: "Date",
      headerClassName: "grid-header",
      headerAlign: "center",
      flex: 1,

    },
    {
      field: "col5", 
      headerName: "Get Tickets",
      headerClassName: "grid-header",
      headerAlign: "center",
      flex: 1,
    },
  ]

  const table = () => {
    return(
    <main className={classes.root} style={{ display: "flex", height: 300 }}>
      <Container>

      {eventMap()}
      <DataGrid
          pagination
          pageSize={5}
          rows={rows}
          columns={columns}
          rowHeight={25}
          />
      </Container>
      </main>
      )
  }
  const eventMap = () => {
  
    props.events.map((event, index) => { 
      return rows.push({
        id: index,
        col1: event.name,
        col2: event.distance,
        col3: event.dates.start.localTime,
        col4: event.dates.start.localDate,
        col5: event.url
        // col6: <img src={event.images[0].url} />,
      });
    });
  };
  return (
    <>
    <div style={{background: "#d6e6f2"}}>
      {table()}
      {eventMap()}
      
    </div>
    </>
  );
};

export default TicketMasterDisplay;
