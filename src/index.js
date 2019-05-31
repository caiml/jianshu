import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.js';
import "./statics/iconfont/iconfont/iconfont";
import "./statics/iconfont/iconfont/iconfont.css";
// import "./statics/font/fonts/icomoon";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//项目入口