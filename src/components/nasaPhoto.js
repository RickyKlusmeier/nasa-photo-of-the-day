import React from 'react'
import styled from 'styled-components'


const StyledNasaImage = styled.div`
    background-color: #282c34;
    display: flex;

    img {
        display:flex;
        max-width: 75%;
        height: auto;
        margin-left: 25%
    };

`


const NasaPhoto = (props) => {
    const { nasaDataURL } = props;
    // console.log(nasaData?.url)
return (
    <StyledNasaImage>
       <img src={nasaDataURL} />
    </StyledNasaImage>
)}

export default NasaPhoto