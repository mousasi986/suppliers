import React from 'react'
import axios, { AxiosResponse } from 'axios'



const App: React.FC = () => {

  const sendRequest = (e: React.FormEvent) => {
    e.preventDefault()
    var data = ''
    var config = {
      method: 'get',
      url: 'http://localhost:1000/api',
      headers: {},
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.message));
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className="App">
      <form onSubmit={sendRequest}>
        <input name='xui'></input>
        <button type='submit'>zzzzzzz</button>
      </form>

    </div>
  );
}

export default App;
