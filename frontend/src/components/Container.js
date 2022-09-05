import React from 'react'
import styled from 'styled-components'
import Dashboard from './dashboard/Dashboard'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'

function Container() {
  return (
    <StyledContainer>
        <Sidebar />
        <Contents>
            <Navbar />
            <Dashboard />
        </Contents>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
display: flex;
flex-direction: row;
`

const Contents = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export default Container