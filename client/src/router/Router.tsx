import { Route, Routes, Navigate} from "react-router-dom";
import AuthPage from '../pages/AuthPage';
import AdminPage from '../pages/AdminPage'
import CategoryManagersPage from '../pages/CategoryManagersPage';
import ApplicationPage from '../pages/ApplicationPage';
import Table from "../components/Table";
import { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import MainPage from "../pages/MainPage";


const useRoutes = () => {
    const {store} = useContext(Context)

    if(!store.isAuth){
        return(
            <Routes>
                <Route path='/auth' element={<AuthPage/>}/>
                <Route path='*' element={<Navigate replace to="/auth" />} />
            </Routes>     
        )
    }
    else{
        return (
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/admin' element={<AdminPage/>}/>
                <Route path='/applications' element={<Table/>}/>
                <Route path='/application/:id' element={<ApplicationPage/>}/>
                <Route path='/categoryManager' element={<CategoryManagersPage/>}/>
                
                <Route path='*' element={<Navigate replace to="/" />} />
            </Routes>
      )
    }
    

}

export default useRoutes
