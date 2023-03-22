import React from 'react';

import * as BsIcon from "react-icons/bs";
import * as IoIcon from "react-icons/io5"
import * as RiIcon from "react-icons/ri"

export const SidebarData = [
    {
        title:'Dashboard',
        path: '/',
        icon: <RiIcon.RiLayoutMasonryFill/>,
        className: 'nav-text'
    },
    {
        title:'Orders',
        path: '/orders',
        icon: <IoIcon.IoCartOutline/>,
        className: 'nav-text'
    },
    {
        title:'Customers',
        path: '/customers',
        icon: <BsIcon.BsPeople/>,
        className: 'nav-text'
    },
    {
        title:'Reports',
        path: '/reports',
        icon: <IoIcon.IoStatsChart/>,
        className: 'nav-text'
    },
    {
        title:'Integrations',
        path: '/integrations',
        icon: <BsIcon.BsLayers/>,
        className: 'nav-text'
    }
]