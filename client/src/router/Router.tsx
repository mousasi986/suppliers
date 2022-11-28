import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import AuthPage from '../pages/AuthPage';

export const useRoutes = () => {
  return (
        <Routes>
            <Route path='/' element={<AuthPage/>}/>
        </Routes>
  )
}


