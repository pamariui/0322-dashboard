import React from 'react'
import './style.css'
import * as BsIcon from "react-icons/bs";

const Header = ({logo}) => {
  return (
    <header className='header'>
        <div className='header-logo'>
            {logo}
        </div>
        <div className='header-icon'>
            <BsIcon.BsFillBellFill/>
        </div>
    </header>
  )
}

export default Header