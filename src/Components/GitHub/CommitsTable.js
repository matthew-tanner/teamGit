import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "200%",
    "& .grid-header": {
      backgroundColor: "rgba(255, 7, 0, 0.55)",
      fontWeight: "fontWeightBold"
    }
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

const CommitsTable = (props) => {
  const classes = useStyles();
  const rows = [];
  const columns = [
    {
      field: "col1",
      headerName: "Author",
      headerClassName: "grid-header",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "col2",
      headerName: "Message",
      headerClassName: "grid-header",
      headerAlign: "center",
      flex: 1
    },
    {
      field: "col3",
      headerName: "Date",
      headerClassName: "grid-header",
      headerAlign: "center",
      width: 180,
    },
    {
      field: "col4",
      headerName: "Url",
      headerClassName: "grid-header",
      headerAlign: "center",
      flex: 1,
      renderCell: (params) => {
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16}}
          >
            Test
          </Button>
      }
    }
  ];

  const commitMap = () => {
    props.commits.map((commit, index) => {
      return rows.push({
        id: index,
        col1: commit.commit.author.name,
        col2: commit.commit.message,
        col3: commit.commit.author.date,
        col4: commit.url
      });
    });
  };

  return (
    <div>
      <main className={classes.root} style={{ justifyContent: "center", height: 600 }}>
        {commitMap()}
        <DataGrid
          autoPageSize
          pagination
          pageSize={10}
          rows={rows}
          columns={columns}
          rowHeight={25}
        />
      </main>
    </div>
  );
};

export default CommitsTable;
