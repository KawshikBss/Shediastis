import React from 'react'
import styled from 'styled-components'
import Events from './Events'

function Dashboard() {
  return (
    <StyledDash>
        <Events />
    </StyledDash>
  )
}

const StyledDash = styled.div`
`

export default Dashboard