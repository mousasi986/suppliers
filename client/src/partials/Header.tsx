import React from 'react'

const Header = () => {
  return (
      <header>
        <div className='logo'>
          <h1>Suppliers</h1>
        </div>
        <div className='main'>
          <a>Норм</a>
          <a>Норм</a>
          <a>Норм</a>
        </div>
        <div className='header_auth'>
          <a>Вход</a>
          <a>Выход</a>
        </div>
      </header>
  )
}

export default Header