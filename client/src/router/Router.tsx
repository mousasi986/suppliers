import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import AuthScreen from '../screens/AuthScreen';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AuthScreen/>}/>
            
        </Routes>
        
    </BrowserRouter>
  )
}

export default Router
