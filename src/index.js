import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Routers from './router'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Routers/>, document.getElementById('root'));
registerServiceWorker();
