import { Route, Routes, Navigate } from "react-router-dom";
import AllUsersPage from '../pages/AllUsersPage'
import CategoryManagersPage from '../pages/CategoryManagersPage';
import ApplicationPage from '../pages/ApplicationPage';
import SuppliersPage from "../pages/SuppliersPage";
import AllApplicationsPage from "../pages/AllApplicationsPage";
import ProfilePage from "../pages/ProfilePage";


export default class useRoutes {
    // const {store} = useContext(Context)

    static adminRouter = () => {
        return (
            <Routes>
                <Route path='/' element={<AllUsersPage />} />

                <Route path='/applications' element={<AllApplicationsPage />} />
                <Route path='/application/:id' element={<ApplicationPage />} />

                <Route path='/users' element={<AllUsersPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='*' element={<Navigate replace to="/" />} />
            </Routes>
        )
    }

    static supplierRouter = () => {
        return (
            <Routes>
                <Route path='/' element={<SuppliersPage />} />
                <Route path='/application/:id' element={<ApplicationPage />} />
                <Route path='/supplier' element={<SuppliersPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='*' element={<Navigate replace to="/" />} />
            </Routes>
        )
    }

    static categoryManagerRouter = () => {
        return (
            <Routes>
                <Route path='/' element={<CategoryManagersPage />} />
                <Route path='/application/:id' element={<ApplicationPage />} />
                <Route path='/category_manager' element={<CategoryManagersPage />} />
                <Route path='/profile' element={<ProfilePage />} />
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


