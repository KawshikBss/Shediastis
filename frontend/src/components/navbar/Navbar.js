import React from 'react'
import styled from 'styled-components'
import { Navlink } from './Navlink'

export const Navbar = () => {
  return (
    <StyledNav>
        <Navlink>
          Navlink
        </Navlink>
        <Navlink>
          Navlink
        </Navlink>
        <Navlink>
          Navlink
        </Navlink>
        <Navlink>
          Navlink
        </Navlink>
        <Navlink>
          Navlink
        </Navlink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
`;

export default Navbar