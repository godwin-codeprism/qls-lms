import React, { Component } from 'react';
import './App.css';
import { URL_GET_ALL_USERS } from './api/gapi';
import Axios from 'axios';
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;