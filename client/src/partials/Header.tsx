import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../index';

const Header = () => {

  const { store } = useContext(Context)

  return (
    <>
      {
        store.user.role ?
          <>
            {
              store.user.role.role == 'admin' ?
                <header>
                  <div className='logo'>
                    <Link to='/'>Администратор</Link>
                  </div>
                  <div className='main'>
                    <Link to='/applications'>Все заявки</Link>
                    <Link to='/users'>Все пользователи</Link>
                    {/* <Link to='/category_manager'>Категорийный</Link>
                    <Link to='/supplier'>Поставщик</Link> */}
                  </div>
                  <div className='header_auth'>
                    {store.isAuth ?
                      <a href='/' onClick={() => { store.logout() }}>Выход</a>
                      :
                      <></>
                    }

                  </div>
                </header>
                :
                <></>
            }


            {store.user.role.role == 'supplier' ?
              <header>
                <div className='logo'>
                  <Link to='/'>Поставщик</Link>
                </div>

                  <Link style={{ textAlign: 'center', fontSize: '20px' }} to='/supplier'>Создать заявку</Link>

                <div className='header_auth'>
                  {store.isAuth ?
                    <a href='/' onClick={() => { store.logout() }}>Выход</a>
                    :
                    <></>
                  }

                </div>
              </header>
              :
              <></>
            }

            {store.user.role.role == 'category_manager' ?
              <header>
                <div className='logo'>
                  <Link to='/'>Категорийный менеджер</Link>
                </div>
                <Link style={{ textAlign: 'center', fontSize: '20px' }} to='/category_manager'>Посмотреть заявки</Link>
                <div className='header_auth'>
                  {store.isAuth ?
                    <a href='/' onClick={() => { store.logout() }}>Выход</a>
                    :
                    <></>
                  }

                </div>
              </header>
              :
              <></>
            }
          </>
          :
          <></>
      }



    </>

  )
}

export default Header