import React, { useState } from 'react'
import '../styles/AuthPage.scss'
import { useApiGet, ApiResponse } from '../hooks/useApiHook'

const AuthPage: React.FC = () => {
  const [form, setForm] = useState()
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "chat_id": "456230582"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const data: ApiResponse = useApiGet('http://a3ba-92-255-180-237.eu.ngrok.io/getPassword', requestOptions)
  if (!data.loading) {
    console.log(data)
  }

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