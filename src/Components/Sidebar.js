import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Home from './Home'
import Weather from './WeatherApp/Weather'
import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import GetEarthImage from './GetEarthImage'

const Sidebar = ({ latitude, longitude }) => {
    console.log(latitude, longitude)
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/weather'>Current Weather</Link></li> 
                    <li><Link to='/getearthimage'>Satellite Image</Link></li> 
                </ul>
            </div>

            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/weather'><Weather latitude={latitude} longitude={longitude} /></Route>
                    <Route exact path='/getearthimage'><GetEarthImage latitude={latitude} longitude={longitude} /></Route>
                    <Route exact path='/'><Home /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar