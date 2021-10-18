import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div `
    background-color: black;
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 10px;
    color: white;
    // margin-top: 5%;
`
const Footer = ({nasaDataCopyR})  => {
    return (
    <StyledFooter> 
        <h3>Website Created by: Ricky Klusmeier</h3>
        <h4>Photo Copyright: {nasaDataCopyR}</h4>
    </StyledFooter>
    )}
export default Footer