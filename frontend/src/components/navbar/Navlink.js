import React from 'react'
import styled from 'styled-components'

export const Navlink = ({ children , active}) => {
  return (
    <StyledNavlink active={active}>
        { children }
    </StyledNavlink>
  )
}

const StyledNavlink = styled.div`
  padding: 25px;
  width: fit-content;
  background-color: ${props => props.active? '#232323': 'white'};
  color: ${props => props.active? '#6C63FF': '#232323'};
  border: 2px solid white;
  border-radius: 0.25rem;
  &: hover {
    transform: scale(1.15);
    color: #6C63FF;
  }
`;


export default Navlink