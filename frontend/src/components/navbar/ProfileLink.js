import React from 'react'
import styled from 'styled-components'

function ProfileLink({ route, username, profileimage }) {
  return (
    <StyledLink href={ route }>
        <LinkImage src={'elon_musk.webp'} />
        <LinkText>
          { username }
        </LinkText>
    </StyledLink>
  )
}

const StyledLink = styled.a`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 5px;
font-size: 16px;
text-decoration: none;
cursor: pointer;
    &:hover {
      p {
        color: #6C63FF;
      }
      img {
        border: 1px solid #6C63FF;
      }
    }
`

const LinkText = styled.p`
font-size: 16px;
color: #232323;
`

const LinkImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
border: 1px solid #232323;
object-fit: cover;
`

export default ProfileLink