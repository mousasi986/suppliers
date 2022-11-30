import React from 'react'
import { Route, Routes} from "react-router-dom";
import AuthPage from '../pages/AuthPage';
import AdminPage from '../pages/AdminPage'
import SuppliersPage from '../pages/SuppliersPage';
import CategoryManagersPage from '../pages/CategoryManagersPage';


export const useRoutes = () => {
  
    return (
          <Routes>
              <Route path='/' element={<AuthPage/>}/>
              <Route path='/admin' element={<AdminPage/>}/>
              <Route path='supplier' element={<SuppliersPage/>}/>
              <Route path='categoryManager' element={<CategoryManagersPage/>}/>
          </Routes>
    )
  // }
  // return(
  //   <Routes>
      
  //   </Routes>
  // )

}


