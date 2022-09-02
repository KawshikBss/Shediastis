import React from 'react'
import styled from 'styled-components'

function SidebarLogo({ route, extended }) {
  return (
    <StyledLogo href={ route }>
        <LogoImage src={ 'Logo.png' } />
        {
            (extended)?
            (<LogoText>
                Shediastis
            </LogoText>):
            ''
        }
    </StyledLogo>
  )
}

const StyledLogo = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    gap: 20px;
`

const LogoImage = styled.img`
    width: 50px;
    height: 50px;
    background-color: #232323;
    border-radius: 50%;
    padding: 2px;
`

const LogoText = styled.span`
    font-weight: 600;
    font-size: 32px;
    color: #DDDDDD;
`

export default SidebarLogo