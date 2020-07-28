import React from './node_modules/react'
import Logo from '../../assets'

import './Header.css'
import Button from '../Button'

function Header() {
  return (
    <nav className='Header'>
      <a href='/'>
        <img className='Logo' src={Logo} alt='SciFlix Logo'/>
      </a>

      <Button as='a' className='ButtonLink' href='/'>
        Novo Video
      </Button>
    </nav>
  )
}

export default Header 