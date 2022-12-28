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
  const u = JSON.stringify(store.user)
  const user = JSON.parse(u)
  console.log(user.role)
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
    }}
    if(store.user.role){
        console.log('role imeetsa')
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
        if(store.user.role.role == 'category_manager'){
          console.log(store.user.role.role)
          return(
            <BrowserRouter>
              <Header />
              <div className="container">
                {useRoutes.categoryManagerRouter()}
              </div>
            </BrowserRouter>
          )
        }
        
        
      }
  
    
   
      return (
        <BrowserRouter>
          <Header />
          <div className="undefinedRole">
            <h1>Ваш аккаунт еще не прошел проверку администратором</h1>
            <a href="https://t.me/eterlate">Обратная связь</a>
          </div>
        </BrowserRouter>
      );
    
    
  
}

export default observer(App);
