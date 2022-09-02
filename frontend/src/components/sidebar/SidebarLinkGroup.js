import styled from "styled-components"
import React from 'react'
import SidebarLink from "./SidebarLink"
import { FaHome, FaCalendarAlt, FaBell, FaDumbbell } from 'react-icons/fa'

function SidebarLinkGroup({ extended }) {
  return (
    <StyledLinkGroup>
      <SidebarLink route='/' active>
        <FaHome />
        {(extended)? 'Dashboard': ''}
      </SidebarLink>
      <SidebarLink route='/'>
        <FaCalendarAlt />
        {(extended)? 'Schedule': ''}
      </SidebarLink>
      <SidebarLink route='/'>
        <FaBell />
        {(extended)? 'Reminders': ''}
      </SidebarLink>
      <SidebarLink route='/'>
        <FaDumbbell />
        {(extended)? 'Fitness Organizer': ''}
      </SidebarLink>
    </StyledLinkGroup>
  )
}

const StyledLinkGroup = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
padding: 25px 10px;
gap: 10px;
`

export default SidebarLinkGroup