import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import geolocation from 'geolocation'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar';

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
      <Header />
      
      <Router>

      {/* <ElevateAppBar latitude={latitude} longitude={longitude}/> */}
        <Sidebar latitude={latitude} longitude={longitude} />
      </Router>

    </div>
  );
}

export default App;
