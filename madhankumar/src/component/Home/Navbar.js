import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const[isMobile,setIsMobile]=useState(false)
    
  return (
    <div className='wrapper'>
      <nav className='navbar'>
        <h3 className='logo'>Madhan Foodcard </h3>
        <ul className={ isMobile ? 'nav-links-mobile':'nav-links'}>
            <Link to="/" className='home'>
                <li>Home</li>
            </Link>
        
            <Link to="/Login" className='Login'>
                <li>Login</li>
            </Link>
            <Link to="/Signup" className='Signup'>
                <li>Signup</li>
            </Link>

            <button className='mob-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
              {isMobile ? <h1> X </h1>:<h1>=</h1>}
            </button>
        </ul>
    </nav>
     <div className='container'>
        
     </div>
    </div>
        

      
    
    
    
    
  )
}

export default Navbar
