import React from 'react'
import axios, { AxiosResponse } from 'axios'
import Header from './partials/Header';
import { useRoutes } from './router/Router'
import { BrowserRouter } from 'react-router-dom';
import './index.scss';


const App: React.FC = () => {
  const routes = useRoutes()
  // const sendRequest = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   var data = ''
  //   var config = {
  //     method: 'get',
  //     url: 'http://localhost:1000/api',
  //     headers: {},
  //     data: data
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data.message));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  // }

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
