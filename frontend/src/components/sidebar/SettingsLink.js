import React from 'react'
import styled from 'styled-components'

function SettingsLink( { children, route, active } ) {
  return (
    <StyledLink href={ route } active={ active }>
        { children }
    </StyledLink>
  )
}

const StyledLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
font-size: 18px;
width: fit-content;
height: 20px;
color: ${props => props.active? '#6C63FF': 'rgba(23, 23, 23, 50%)'};
background-color: ${props => props.active? '#232323': 'transparent'};
padding: 20px 15px;
border-radius: 20px;
gap: 10px;
cursor: pointer;
    &:hover {
        color: rgba(23, 23, 23, 100%);
        background-color: rgba(23, 23, 23, 50%);
    }
`

export default SettingsLink