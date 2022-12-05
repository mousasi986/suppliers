import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <header>
        <div className='logo'>
          <h1>Suppliers</h1>
        </div>
        <div className='main'>
          <Link to='/applications'>Все заявки</Link>
        </div>
        <div className='header_auth'>
          <Link to='/'>Вход</Link>
        </div>
      </header>
  )
}

export default Header