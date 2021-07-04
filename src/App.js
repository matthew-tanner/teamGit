import React, { useState } from 'react'
import './App.css';
import geolocation from 'geolocation';
import GitHubIndex from './GitHub/GitHubIndex';

function App() {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

    const location = () => {

      geolocation.getCurrentPosition(function (err, position) {

      if (err) throw err
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      })
    }

    if (!latitude && !longitude) {
      location()
    }

  return (
    <div className="App">
      {longitude}
      <br />
      {latitude}
      <br />
      <GitHubIndex />
    </div>
  );
}

export default App;
