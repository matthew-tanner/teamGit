import React, { useState, useEffect } from 'react'
// import Card from '@material-ui/core/Card';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?'
const key = '44f658ecdd6d9bcedddf97d114d8dd9c'
let lat = '39'
let lon = '-86'
const url = `${baseUrl}lat=${lat}&lon=${lon}&appid=${key}`

// const urlApiAndLatLon = 'api.openweathermap.org/data/2.5/weather?lat=39&lon=-86&appid=44f658ecdd6d9bcedddf97d114d8dd9c'


const Weather = () => {
    const [data, setData] = useState(null);

    console.log('weather app is called');
    
    const fetchWeather = () => {
        // let lat = '39'
        // let lon = '-86'
        // fetch (`${baseUrl}lat=${lat}&lon=${lon}&appid=${key}`)
        // fetch('api.openweathermap.org/data/2.5/weather?q=London&appid=44f658ecdd6d9bcedddf97d114d8dd9c')
        fetch (url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then (async res => {
            try {
                const data = await res.json()
                console.log('response data', data);
            } catch(err) {
                console.log('error happened here');
                console.error(err)
            }
        })
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(err))
    }
    fetchWeather()

    // useEffect(() => {
    //     // e.preventDefault()
    //     fetchWeather()
    //     console.log(data);
    // }, [data])
    return(
        <div>
            <p>test</p>
        </div>
        
    )
}

export default Weather