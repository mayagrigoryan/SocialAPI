import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='logo_block'>
                <NavLink to='/'>
                    <img src="https://static.vecteezy.com/system/resources/previews/018/930/415/non_2x/instagram-logo-instagram-icon-transparent-free-png.png" alt="" />
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home Page</NavLink></li>
                    <li><NavLink to='/users'>Users Page</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header