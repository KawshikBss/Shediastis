import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'

function Container() {
  return (
    <StyledContainer>
        <Sidebar />
        <Navbar />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
display: flex;
flex-direction: row;
`

export default Container