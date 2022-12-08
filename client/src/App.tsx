import React, { useEffect,useContext } from 'react'
import Header from './partials/Header';
import useRoutes from './router/Router'
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import AuthPage from '../src/pages/AuthPage';


const App: React.FC = () => {
  const routes = useRoutes()
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
    else{
      return (
        <BrowserRouter>
          <Header />
          <div className="container">
            {routes}
          </div>
        </BrowserRouter>
      );
    }
    
  }

  
}

export default observer(App);
