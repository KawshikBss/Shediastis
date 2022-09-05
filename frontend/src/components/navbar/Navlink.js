import React from 'react'
import styled from 'styled-components'

function Navlink({ children }) {
  return (
    <StyledLink>
        { children }
    </StyledLink>
  )
}

const StyledLink = styled.button`
    color: rgba(23, 23, 23, 50%);
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    &:hover {
        color: #6C63FF;
    }
    svg {
        width: 20px;
        height: 20px;
    }
`

export default Navlink