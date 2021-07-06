import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CommitsTable from "./CommitsTable";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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

const GitHubIndex = () => {
  const [commits, setCommits] = useState([]);
  const classes = useStyles();

  const fetchCommits = () => {
    fetch(`https://api.github.com/repos/matthew-tanner/teamGit/commits?per_page=100&sha=develop`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCommits(data);
      });
  };

  useEffect(() => {
    fetchCommits();
  }, []);

  return (
    <div>
      <main className={classes.content}>
      <Toolbar />
      <Typography variant="h3">
          GitHub Commit History
        </Typography>
        <Typography paragraph >
          The DataGrid shows full history of commits made in the develop branch for the teamGit repo.
        </Typography>
        <CommitsTable fetchCommits={fetchCommits} commits={commits} />
      </main>
    </div>
  );
};

export default GitHubIndex;
