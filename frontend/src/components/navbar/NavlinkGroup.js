import React from 'react'
import styled from 'styled-components'
import ProfileLink from './ProfileLink'

function NavlinkGroup() {
  return (
    <StyledLinkGroup>
        <div>NavlinkGroup</div>
        <ProfileLink />
        <div>NavlinkGroup</div>
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