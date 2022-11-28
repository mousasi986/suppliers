import React from 'react'
import axios, {AxiosResponse} from 'axios'

interface resp {
  message:string
}

const App:React.FC = () => {

  const sendRequest = () =>{
    var data = ''
    var config = {
      method: 'get',
      url: 'http://localhost:1000/api',
      headers: { },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  return (
    <div className="App">
      <form>
      <input name='xui'></input>
      <button type='submit' onClick={sendRequest}>zzzzzzz</button>
      </form>
      
    </div>
  );
}

export default App;
