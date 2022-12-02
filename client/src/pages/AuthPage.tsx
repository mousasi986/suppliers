import React, { useState } from 'react'
import '../styles/AuthPage.scss'
import {useHttp} from '../hooks/useApiHook'
import IUser from '../interfaces/IUser'


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
    request<IUser>('/auth/getPassword', 'POST', {phone: form.phone, password: form.password}, {}).then(result =>{
      if(result.isAuth == false){
        alert(result.message)
      }
      else{
        console.log('successfully autentificated')
      }
    })
  }



  return (
    <div className='auth'>
      <div className='auth_window'>
        <h1>Авторизация</h1>
        <div className='auth_block'>
          <label>Логин</label>
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
            type={"password"}
            value={form.password}
            onChange={changeForm}
          />
        </div>
        {/* <button >Получить код</button> */}
        <button onClick={sendQuery}>Войти</button>
      </div>
    </div>
  )
}

export default AuthPage