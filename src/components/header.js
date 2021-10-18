import React from 'react'
import Links from './links'
import styled from 'styled-components'


const StyledHeader = styled.div `
    background-color: black;
    height: 15vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: calc(10px + 2vmin);
    color: white;
`
export default function Header() {
return (
<StyledHeader>
    <Links />
</StyledHeader>
)} 