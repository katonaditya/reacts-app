import React from 'react'
import { NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <div className="navbar-fixed">
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <a href="/" className="brand-logo">LOGO</a>
                <ul className="right">
                    <li> <NavLink to="/">Home</NavLink> </li>
                    <li> <NavLink to="/todo">Todo's</NavLink> </li>
                    <li> <NavLink to="/about">About</NavLink> </li>
                    <li> <NavLink to="/contact">Contact</NavLink> </li>
                    <SignedInLinks/>
                    <SignedOutLinks/>

                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar;