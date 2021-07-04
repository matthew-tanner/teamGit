import React, { useEffect, useState } from "react";
import CommitsTable from "./CommitsTable";

const GitHubIndex = () => {
  const [commits, setCommits] = useState([]);

  const fetchCommits = () => {
    fetch(`https://api.github.com/repos/matthew-tanner/teamGit/commits?per_page=100&sha=develop`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCommits(data);
      });
  };

  useEffect(() => {
    fetchCommits();
  }, []);

  return (
    <div>
      <CommitsTable fetchCommits={fetchCommits} commits={commits} />
    </div>
  );
};

export default GitHubIndex;
