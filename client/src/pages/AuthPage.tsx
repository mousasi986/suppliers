import React, { useState } from 'react'
import '../styles/AuthPage.scss'
import {useHttp} from '../hooks/useApiHook'
import IHttpData from '../interfaces/IHttpData'

const AuthPage: React.FC = () => {
  const [form, setForm] = useState({
    phone: '',
    password: ''
  })
  const { request, loading } = useHttp()
  const changeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })

  }
  const sendQuery = () =>{
    request<IHttpData>('/getPassword', 'POST', {chat_id: form.phone}, {}).then(result =>{
      console.log(result)
    })
  }

  



  return (
    <div className='auth'>
      <div className='auth_window'>
        <h1>Авторизация</h1>
        <div className='auth_block'>
          <label>Телефон</label>
          <input
            placeholder='Введите телефон'
            name='phone'
            value={form.phone}
            onChange={changeForm}
          />
        </div>
        <div className='auth_block'>
          <label>Пароль</label>
          <input
            placeholder='Введите пароль'
            name='password'
            value={form.password}
            onChange={changeForm}
          />
        </div>
        <button onClick={sendQuery}>Получить код</button>
        <button>Войти</button>
      </div>
    </div>
  )
}

export default AuthPage