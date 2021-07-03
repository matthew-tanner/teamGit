import React from 'react'
import styled from 'styled-components'

const ImageArea = styled.div`
margin: 10px;
width: 500px;
height: 500px;
`;

const EarthImage = styled.img`
width: calc(100% - 20px);
height: calc(100% - 20px);
margin: 10px 10px 0 10px
`;


const DisplayEarth = ({ imageUrl, imageDate, latitude, longitude }) => {
    return (
        <ImageArea>
            <EarthImage src={imageUrl} />
            <h3>Image taken by NASA's Landsat 8 satelite on {imageDate}</h3>
            <br />
            <h3>Latitude = {latitude} and Longitude = {longitude}</h3>
        </ImageArea>
    )
}

export default DisplayEarth
