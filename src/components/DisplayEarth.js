import React from 'react'

// NASA Photo of the Day
// const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=";
// const apiKey = "U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35"
//const url= baseUrl + apiKey

// TEST LINK: https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35
// const baseUrl = "https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key="
// const apiKey = "U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35"

//TEST LINK:  https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35
const baseUrl = "https://api.nasa.gov/planetary/earth/assets?"
const apiKey = "U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35"

const DisplayEarth = ({ latitude, longitude }) => {
    console.log(latitude, longitude)

    const apiUrl = `${baseUrl}lon=${longitude}&lat=${latitude}&date=2021-01-01&&dim=0.10&api_key=${apiKey}`
    console.log(apiUrl)

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(async res => {
        try {
            const data = await res.json()
            console.log('response data', data);
            console.log(data.url)
        } catch (err) {
            console.log('error happened here');
            console.error(err)
        }
    })

    return (
        <div>
            Hello
        </div>
    )
}

const displayImage = (results) => {
    console.log(results)
}

export default DisplayEarth
