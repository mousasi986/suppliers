import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../index';

const Header = () => {

  const{store} = useContext(Context)

  return (
      <header>
        <div className='logo'>
          <Link to='/'>Suppliers</Link>
        </div>
        <div className='main'>
          <Link to='/applications'>Все заявки</Link>
          <Link to='/admin'>Админ</Link>
          <Link to='/admin'>Категорийный</Link>
          <Link to='/admin'>Поставщик</Link>
        </div>
        <div className='header_auth'>
          {store.isAuth?
          <a href='/' onClick={()=> {store.logout()}}>Выход</a>
          :
          <></>
          }
            
        </div>
      </header>
  )
}

export default Header