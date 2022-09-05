import React from 'react'
import styled from 'styled-components'
import ProfileLink from './ProfileLink'
import Navlink from './Navlink'
import { AiFillCaretDown } from 'react-icons/ai'

function NavlinkGroup() {
  return (
    <StyledLinkGroup>
        <ProfileLink username={ 'Elon Musk' } />
        <Navlink>
          <AiFillCaretDown />
        </Navlink>
    </StyledLinkGroup>
  )
}

const StyledLinkGroup = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
padding: 10px 20px;
gap: 10px;
`

export default NavlinkGroup