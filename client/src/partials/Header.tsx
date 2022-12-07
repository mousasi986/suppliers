import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../index';
const Header = () => {

  const{store} = useContext(Context)

  return (
      <header>
        <div className='logo'>
          <h1>Suppliers</h1>
        </div>
        <div className='main'>
          <Link to='/applications'>Все заявки</Link>
        </div>
        <div className='header_auth'>
            <button onClick={()=> store.logout()}>Выход</button>
        </div>
      </header>
  )
}

export default Header