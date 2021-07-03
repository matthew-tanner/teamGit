import React, { useState, useEffect } from 'react'

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?'
const key = '44f658ecdd6d9bcedddf97d114d8dd9c'


const Weather = ({ latitude, longitude }) => {
    console.log(latitude, longitude)
    const url = `${baseUrl}lat=${latitude}&lon=${longitude}&appid=${key}`
    const [data, setData] = useState(null);

    console.log('weather app is called');
    
    const fetchWeather = () => {
        fetch (url)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    fetchWeather()
    
        return(
            <div>
            <p>test</p>
        </div>
        
        
        )
    }
    
    export default Weather