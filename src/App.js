import React, { Component } from 'react';
import './App.css';
import Header from './page/header'
import LeftMenu from './page/leftMenu'

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <LeftMenu/>
        </div>
    );
  }
}

export default App;
