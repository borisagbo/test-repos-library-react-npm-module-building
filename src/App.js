import logo from './logo.svg';
import axios, * as others from 'axios';

import './App.css';
import {getUsers} from 'github_user_tdev228'
function App() {
  const onClick = (e) => {
    getUsers().then((users) => {
      console.log(users)})
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  className="App-logo" alt="logo" />
        <p onClick={()=>(onClick())}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
