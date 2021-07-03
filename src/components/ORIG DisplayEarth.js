import React from 'react'
import { useState } from 'react'
import Image from 'material-ui-image'
// import styled from 'styled-components'

// const ImageArea = styled.div`
// margin: 10px;
// width: 300px;
// height: 300px;
// `;

// const EarthImage = styled.img`
// width: calc(100% - 20px);
// height: calc(100px - 10px);
// margin: 10px 10px 0 10px
// `;


//TEST LINK:  https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35
const baseUrl = "https://api.nasa.gov/planetary/earth/assets?"
const apiKey = "U5YCwar82d9GKNPxCGPTYasZE30KkEyD2glgTP35"

const DisplayEarth = ({ latitude, longitude }) => {
    console.log(latitude, longitude)

    const [earthImage, setEarthImage] = useState([])
    setEarthImage('https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg')

    // const apiUrl = `${baseUrl}lon=${longitude}&lat=${latitude}&date=2021-01-01&&dim=0.10&api_key=${apiKey}`
    // console.log(apiUrl)

    // fetch(apiUrl, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    //     .then(async res => {
    //         try {
    //             const data = await res.json()
    //             console.log('response data', data);
    //             console.log(data.url)
    //             setEarthImage(data.url)
    //             console.log(earthImage)
    //         } catch (err) {
    //             console.log('error happened here');
    //             console.error(err)
    //         }
    //     })

    return (
        // <ImageArea>
        //     <EarthImage src='https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg' />
        //     {/* <img src="https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg" /> */}
        // </ImageArea>

        <div>
            <img src={`${earthImage}`} alt='' />
        </div>
    )
}

export default DisplayEarth
