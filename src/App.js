import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import geolocation from "geolocation";
import GitHubIndex from "./Components/GitHub/GitHubIndex";
import Layout from "./Components/Layout";
import Weather from "./Components/WeatherApp/Weather";
import Home from "./Components/Home";
import GetEarthImage from "./Components/Nasa/GetEarthImage";
import TicketMaster from "./Components/TicketMaster/TicketMaster";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const location = () => {
    geolocation.getCurrentPosition(function (err, position) {
      if (err) throw err;
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  if (!latitude && !longitude) {
    location();
  }

  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/weather">
              <Weather longitude={longitude} latitude={latitude} />
            </Route>
            <Route path="/nasa">
              <GetEarthImage longitude={longitude} latitude={latitude} />
            </Route>
            <Route path="/events">
              <TicketMaster longitude={longitude} latitude={latitude} />
            </Route>
            <Route path="/github">
              <GitHubIndex />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
