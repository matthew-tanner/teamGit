import React, { useState } from 'react'

import DisplayEarth from './DisplayEarth'

//TEST LINK:  https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35
const baseUrl = "https://api.nasa.gov/planetary/earth/assets?"
const apiKey = "U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35"

const EarthImage = ({ latitude, longitude }) => {
    const [imageUrl, setImageUrl] = useState()

    const apiUrl = `${baseUrl}lon=${longitude}&lat=${latitude}&date=2021-01-01&&dim=0.10&api_key=${apiKey}`
    console.log(apiUrl)

    const fetcher = () => {
        console.log("In fetcher")

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
                    setImageUrl(data.url)
                    console.log(imageUrl)
                } catch (err) {
                    console.log('error happened here');
                    console.error(err)
                }
            })
    }

    return (

        <div>
            <button onClick={fetcher}>Click for a satelite view of your location</button>
            <DisplayEarth imageUrl={imageUrl} />
            {/* <input type="button" value="Click for a satelite view of your location" /> */}
            {/* <img src={`${imageUrl`} alt='' /> */}
        </div>
    )
}

export default EarthImage
