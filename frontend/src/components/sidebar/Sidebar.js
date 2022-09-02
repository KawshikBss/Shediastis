import styled from 'styled-components'
import React, { useState } from 'react'
import SidebarLinkGroup from './SidebarLinkGroup'
import SidebarLogo from './SidebarLogo'

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
        </StyledSidebar>
    )
}

const StyledSidebar = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flext-start;
width: fit-content;
height: 100vh;
background-color: #6C63FF;
border-radius: 0 0 20px 0;
`

export default Sidebar