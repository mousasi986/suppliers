import React from 'react'
import axios from 'axios'



const App:React.FC = () => {

  const sendRequest = () =>{
  
    axios.get("http://localhost:1000/api")
    .then(res => {
      console.log(res.data)
    })
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
