import React, { useState } from 'react'
import './App.css';
import geolocation from 'geolocation'
import Weather from './Components/Weather'
import ElevateAppBar from './Components/Header'

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

      <ElevateAppBar />

      <Weather latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;
