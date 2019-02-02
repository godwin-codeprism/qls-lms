import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { URL_GET_ALL_USERS } from './api/gapi';
import Axios from 'axios';

class App extends Component {
  componentDidMount() {
    console.log(URL_GET_ALL_USERS);
    Axios.get(URL_GET_ALL_USERS).then(function (response) {
      console.log(response);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
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
}

export default App;
