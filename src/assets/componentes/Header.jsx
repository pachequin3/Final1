import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <NavLink to={"/"}>
            <h1>Home</h1>
        </NavLink>
        <NavLink to={"/about"}>
            <h1>About</h1>
        </NavLink>
        <NavLink to={"/dashboard"}>
            <h1>Dashboard</h1>
        </NavLink>
    </header>
    
    
  )
}

export default Header