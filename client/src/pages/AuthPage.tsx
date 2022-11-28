import React from 'react'
import '../styles/AuthPage.scss'

const AuthPage: React.FC = () => {
  return (
      <div className='auth'>
        <div className='auth_window'>
          <h1>Авторизация</h1>
          <div className='auth_block'>
            <label>Логин</label>
            <input placeholder='Введите логин'></input>
          </div>
          <div className='auth_block'>
            <label>Пароль</label>
            <input placeholder='Введите пароль'></input>
          </div>
          <button>Войти</button>
        </div>
      </div>
  )
}

export default AuthPage