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


const DisplayEarth = ({ imageUrl }) => {
    console.log(imageUrl)
    return (
        //<img src={imageUrl} alt="" />
        <ImageArea>
            <EarthImage src={imageUrl} />
        </ImageArea>
    )
}

export default DisplayEarth
