import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
      <img src="/netflix_logo.svg" alt="netflix" className=''/></Link>
    </header>
  )
}

export default Header
