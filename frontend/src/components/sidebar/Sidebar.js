import styled from 'styled-components'
import React, { useState } from 'react'
import SidebarLinkGroup from './SidebarLinkGroup'
import SidebarLogo from './SidebarLogo'
import SettingsLink from './SettingsLink'
import { FiSettings } from 'react-icons/fi'

function Sidebar() {
    const [extended, setExtended] = useState(false);

    const extendSidebar = () => {
        setExtended(true);
    };
    const collapseSidebar = () => {
        setExtended(false);
    };
    return (
        <StyledSidebar
        onMouseEnter={extendSidebar}
        onMouseLeave={collapseSidebar}
        >
            <SidebarLogo route={'/'} extended={extended} />
            <SidebarLinkGroup extended={extended} />
            <SettingsLink route={'/'} icon={FiSettings}>
                <FiSettings />
                {(extended)? 'Settings': ''}
            </SettingsLink>
        </StyledSidebar>
    )
}

const StyledSidebar = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: fit-content;
height: 100vh;
background-color: #6C63FF;
background-image: linear-gradient(15deg, cornflowerblue, #6C63FF);
border-radius: 0 0 20px 0;
`

export default Sidebar