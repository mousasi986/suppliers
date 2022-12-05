import { Route, Routes, Navigate} from "react-router-dom";
import AuthPage from '../pages/AuthPage';
import AdminPage from '../pages/AdminPage'
import CategoryManagersPage from '../pages/CategoryManagersPage';
import ApplicationPage from '../pages/ApplicationPage';
import Table from "../components/Table";

export const useRoutes = () => {
  
    return (
          <Routes>
              <Route path='/' element={<AuthPage/>}/>
              <Route path='/admin' element={<AdminPage/>}/>
              <Route path='/applications' element={<Table/>}/>
              <Route path='/application/:id' element={<ApplicationPage/>}/>
              <Route path='/categoryManager' element={<CategoryManagersPage/>}/>
              
              <Route path='*' element={<Navigate replace to="/" />} />
          </Routes>
    )
  // }
  // return(
  //   <Routes>
      
  //   </Routes>
  // )

}


