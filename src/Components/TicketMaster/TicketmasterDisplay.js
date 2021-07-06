import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
    margin: 'auto',
    width: "100%",
    height: 400
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
      headerClassName: "",
      headerAlign: "center",
      width: 150,
      color: "white"
      // background: "#f7fbfc" 
    },
    {
      field: "col2",
      headerName: "Distance",
      headerClassName: "",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "col3",
      headerName: "Time",
      headerClassName: "",
      headerAlign: "center",
      width: 150
    },
    {
      field: "col4",
      headerName: "Date",
      headerClassName: "",
      headerAlign: "center",
      width: 150,

    },
    {
      field: "col5", 
      headerName: "Get Tickets",
      headerClassName: "",
      headerAlign: "center",
      width: 150,
    },
  ]

  const table = () => {
    return(
    <main className={classes.content} style={{ display: "flex", height: 600 }}>
      <Container>

      {eventMap()}
      <DataGrid
          // backgroundColor: theme.palette.primary.light,
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
    console.log(props.events);
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
