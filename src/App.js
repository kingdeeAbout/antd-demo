import React, { Component } from 'react';
import './App.css';
import Header from './page/header'
import LeftMenu from './page/leftMenu'



class App extends Component {
  render() {
    return (
        <div className="App">
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <div>
                        <LeftMenu/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
