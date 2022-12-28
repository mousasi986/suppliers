import { Route, Routes, Navigate} from "react-router-dom";
import AuthPage from '../pages/AuthPage';
import AllUsersPage from '../pages/AllUsersPage'
import CategoryManagersPage from '../pages/CategoryManagersPage';
import ApplicationPage from '../pages/ApplicationPage';
import Table from "../components/Table";
import { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import SuppliersPage from "../pages/SuppliersPage";
import AllApplicationsPage from "../pages/AllApplicationsPage";


export default class useRoutes{
    // const {store} = useContext(Context)

        static adminRouter = () => {
            return (
                <Routes>
                    <Route path='/' element={<AllUsersPage/>}/>
                    
                    <Route path='/applications' element={<AllApplicationsPage/>}/>
                    <Route path='/application/:id' element={<ApplicationPage/>}/>
    
                    <Route path='/admin' element={<AllUsersPage/>}/>
                    <Route path='/category_manager' element={<CategoryManagersPage/>}/>
                    <Route path='/supplier' element={<SuppliersPage/>}/>
                    
                    <Route path='*' element={<Navigate replace to="/" />} />
                </Routes>
          )
        }
        static supplierRouter = () => {
            return (
                <Routes>
                    <Route path='/' element={<SuppliersPage/>}/>
                    <Route path='/application/:id' element={<ApplicationPage/>}/>
                    <Route path='/supplier' element={<SuppliersPage/>}/>
                    <Route path='*' element={<Navigate replace to="/" />} />
                </Routes>
          )
        }

        static categoryManagerRouter = () => {
            return (
                <Routes>
                    <Route path='/' element={<CategoryManagersPage/>}/>
                    <Route path='/application/:id' element={<ApplicationPage/>}/>
                    <Route path='/category_manager' element={<CategoryManagersPage/>}/>
                    <Route path='*' element={<Navigate replace to="/" />} />
                </Routes>
          )
        }

    
            // <Routes>
            //     <Route path='/' element={<MainPage/>}/>
                
            //     {/* <Route path='/applications' element={<Table/>}/> */}
            //     <Route path='/application/:id' element={<ApplicationPage/>}/>

            //     <Route path='/admin' element={<AdminPage/>}/>
            //     <Route path='/category_manager' element={<CategoryManagersPage/>}/>
            //     <Route path='/supplier' element={<SuppliersPage/>}/>
                
            //     <Route path='*' element={<Navigate replace to="/" />} />
            // </Routes>
    // }
    

}


