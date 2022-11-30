import React from 'react'
import Header from './partials/Header';
import { useRoutes } from './router/Router'
import { BrowserRouter } from 'react-router-dom';
import './index.scss';


const App: React.FC = () => {
  const routes = useRoutes()

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
