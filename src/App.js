import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import geolocation from 'geolocation'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router } from 'react-router-dom'

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
      <Header />
      <Router>
        <Sidebar latitude={latitude} longitude={longitude}/>
      </Router>
    </div>
  );
}

export default App;
