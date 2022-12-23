import React, { useEffect,useContext } from 'react'
import Header from './partials/Header';
import useRoutes from './router/Router'
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import AuthPage from '../src/pages/AuthPage';


const App: React.FC = () => {
  const {store} = useContext(Context)

  useEffect(() => {

    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  },[])

  if(store.isAuthLoading){
    return(
      <div className='dark'>
        < div className="lds-ripple"><div></div><div></div></div >
      </div >
    )
  }else{
    if(!store.isAuth){
      return(
        <AuthPage/>
      )
    }
    if(store.user.role.role == 'admin'){
      console.log(store.user.role.role)
      return(
        <BrowserRouter>
          <Header />
          <div className="container">
            {useRoutes.adminRouter()}
          </div>
        </BrowserRouter>
      )
    }
    if(store.user.role.role == 'supplier'){
      console.log(store.user.role.role)
      return(
        <BrowserRouter>
          <Header />
          <div className="container">
            {useRoutes.supplierRouter()}
          </div>
        </BrowserRouter>
      )
    }
    if(store.user.role.role == 'categoty_manager'){
      console.log(store.user.role.role)
      return(
        <BrowserRouter>
          <Header />
          <div className="container">
            {useRoutes.supplierRouter()}
          </div>
        </BrowserRouter>
      )
    }
    else{
      return (
        <BrowserRouter>
          <Header />
          <div className="container">
            <h1>Пошел нахуй!</h1>
          </div>
        </BrowserRouter>
      );
    }
    
  }

  
}

export default observer(App);
