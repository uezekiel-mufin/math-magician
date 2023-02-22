import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const links = [
  {
    id:1,
    path:'/',
    name:'Home'
  },
  {
    id:2,
    path:'quote',
    name:'Quote'
  },
  {
    id:3,
    path:'calculator',
    name:'Calculator'
  }
]

const Navbar = () => {
  const handleOpen=()=>{
    const el = document.querySelector('.mobile_menu')
    console.log(el)
    el.style.display = 'flex'
  }

  const handleClose=()=>{
    const el = document.querySelector('.mobile_menu')
    el.style.display = 'none'
  }

  const handleNavLink=()=>{
    handleClose()
  }
  return (
    <div className='header'>
      <h1 className='logo'>Math Magician</h1>
      <ul className='mobile_menu'>
        <span className="" id="close" onClick={()=>handleClose()}><AiOutlineClose style={{fontSize:'2rem', color:'white'}}/></span>
        {
          links.map((link)=> (
            <li key={link.id} onClick={()=>handleNavLink()}>
            <Link to={link.path}>{link.name}</Link>
          </li>
          ))
        }
      </ul>
      <ul className='desktop_menu'>
        {
          links.map((link)=> (
            <li key={link.id}>
            <Link to={link.path}>{link.name}</Link>
          </li>
          ))
        }
      </ul>
      <nav className='menuIcon'><GiHamburgerMenu style={{fontSize:'2rem'}} onClick={()=>handleOpen()}/></nav>
    </div>
  )
}

export default Navbar
