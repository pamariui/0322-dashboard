import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";

import { SidebarData } from './SidebarData';
import { SavedReportData } from './SavedReportsData';
const Navbar = () => {

    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar (!sidebar)
    };

  return (
    <>
        <nav className='navbar-container'>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcon.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toogle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcon.AiOutlineClose onClick={showSidebar} />
                        </Link>
                    </li>
                    <div className='divider'/>
                    {SidebarData.map((item,index) => {
                        return (
                            <li key = {index} className={item.className}  onClick={showSidebar}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <div className='divider'/>
                    <p className='reports'>Saved reports</p>
                    {SavedReportData.map((item,index) => {
                        return (
                            <li key = {index} className={item.className} onClick={showSidebar}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar