import React from 'react';
import { SidebarCategory, SidebarIcon } from './Sidebar';
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <SidebarCategory>
            <SidebarIcon>
                <FaBars/> Find Best Bike
            </SidebarIcon>
        </SidebarCategory>
    );
};

export default Sidebar

