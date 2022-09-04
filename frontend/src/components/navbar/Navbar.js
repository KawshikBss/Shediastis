import React from 'react'
import styled from 'styled-components'
import NavlinkGroup from './NavlinkGroup'

function Navbar() {
  return (
    <StyledNav>
        <NavlinkGroup />
    </StyledNav>
  )
}

const StyledNav = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
width: 100%;
height: fit-content;
background-color: #DDD;
border-radius: 0 0 20px 20px;
`

export default Navbar