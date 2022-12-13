import React, { useContext, useState } from 'react'
import '../styles/AuthPage.scss'
import IUser from '../interfaces/IUser'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'


const AuthPage: React.FC = () => {
  const [form, setForm] = useState({
    phone: '',
    password: ''
  })

  const { store } = useContext(Context)

  
  const changeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })

  }



  return (
    <>
      {
        store.isAuthLoading ?
          <div className='dark'>
            < div className="lds-ripple"><div></div><div></div></div >
          </div >
          :
          <div></div>
      }
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
          <button onClick={() => store.login(form.phone, form.password)}>Войти</button>
        </div>

        <div className='qr'>
          <h1>Если у вас нет пароля, отсканируйте QR код</h1>
          <img src="/qr.svg" alt="" style={{ width: '238px', borderRadius: '10px', marginTop: '20px' }} />
        </div>
        {/* <button >Получить код</button> */}

      </div>

    </>
  )
}

export default observer(AuthPage)