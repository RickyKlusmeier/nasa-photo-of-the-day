import React from 'react'
import styled from 'styled-components'

const StyledTop = styled.div`
    background-color: #282c34;
    color: a2a3a5;
    text-align: center;
    display: flex;
    flex-direction: column;
`

 function Top({nasaDataDate}) {
    return (
        <StyledTop>
            <h1> NASA PHOTO OF THE DAY</h1>
            <h3>For: {nasaDataDate}</h3>
        </StyledTop>
    )
}
export default Top