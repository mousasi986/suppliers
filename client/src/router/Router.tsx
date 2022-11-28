import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import AuthPage from '../pages/AuthPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AuthPage/>}/>
            
        </Routes>
        
    </BrowserRouter>
  )
}

export default Router
