import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className='header'>
      <h1>Math Magician</h1>
      <ul>
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='quote'>Quote</Link></li>
        <li> <Link to='calculator'>Calculator</Link></li>
      </ul>
      <ul >
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='quote'>Quote</Link></li>
        <li> <Link to='calculator'>Calculator</Link></li>
      </ul>
      <nav className='menuIcon'><GiHamburgerMenu style={{fontSize:'2rem'}}/></nav>
    </div>
  )
}

export default Navbar
