import React from 'react';
import { Nav, NavItem, NavLink, Logo, NavItemSmall } from './NavbarStyles.js';
import { useState } from 'react';


const Navbar = () => {
  const [Open, setOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/home"><span>Recipe App</span>
      </Logo>
      <NavItemSmall onClick={()=>setOpen(!Open) } >
      <span />
      <span />
      <span />
      </NavItemSmall>
      <NavItem Open={Open} >
        <NavLink to="/about" onMouseUp={()=>setOpen(!Open)}  >About</NavLink>
        <NavLink onClick={() =>
        (window.location.href =
          'https://github.com/cemispirli')
        }
          to=""
        >Github</NavLink>
        <NavLink 
        onMouseUp={()=>setOpen(!Open)}
        onClick ={()=> sessionStorage.clear()} 
        to="/"
        >Logout</NavLink>
      </NavItem>
    </Nav>
  )
}

export default Navbar