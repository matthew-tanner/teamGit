import React, { useState } from 'react'
import './App.css';
import geolocation from 'geolocation'
import DisplayEarth from './components/DisplayEarth'

function App() {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

    const location = () => {

      geolocation.getCurrentPosition(function (err, position) {

      if (err) throw err
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
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
      <DisplayEarth latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;
