import React from "react";
import { DataGrid } from "@material-ui/data-grid";

const CommitsTable = (props) => {
  const rows = [];
  const columns = [
    {
      field: "col1",
      headerName: "Author",
      headerClassName: "",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "col2",
      headerName: "Message",
      headerClassName: "",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "col3",
      headerName: "Date",
      headerClassName: "",
      headerAlign: "center",
      flex: 1,
    },
  ];

  const commitMap = () => {
    props.commits.map((commit, index) => {
      return rows.push({
        id: index,
        col1: commit.commit.author.name,
        col2: commit.commit.message,
        col3: commit.commit.author.date,
      });
    });
  };

  return (
    <div style={{margin: "30px"}}>
      <div style={{ display: "flex", height: 400 }}>
        {commitMap()}
        <DataGrid autoPageSize pagination pageSize={10} rows={rows} columns={columns} rowHeight={25} />
      </div>
    </div>
  );
};

export default CommitsTable;
