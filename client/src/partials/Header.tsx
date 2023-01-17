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
                    <Link to='/'>Suppliers</Link>
                  </div>
                  <div className='main'>
                    <Link to='/applications'>Все заявки</Link>
                    <Link to='/users'>Все пользователи</Link>
                  </div>
                  <div className='header_auth'>
                    {store.isAuth ?
                      <a href="/profile"><img src="account.svg" width={'50px'}/></a>
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
                  <Link to='/'>Suppliers</Link>
                </div>

                <Link style={{ textAlign: 'center', fontSize: '20px' }} to='/supplier'>Создать заявку</Link>

                <div className='header_auth'>
                  {store.isAuth ?
                    <a href="/profile"><img src="account.svg" width={'50px'}/></a>
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
                  <Link to='/'>Suppliers</Link>
                </div>
                <Link style={{ textAlign: 'center', fontSize: '20px' }} to='/category_manager'>Посмотреть заявки</Link>
                <div className='header_auth'>
                  {store.isAuth ?
                    <a href="/profile"><img src="account.svg" width={'50px'}/></a>
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