import React from 'react';
import Header from './common/header'
import store from "./store"
import { Provider } from "react-redux"
import { BrowserRouter, Route, HashRouter } from "react-router-dom"
import Home from "./pages/home"
import Detail from "./pages/detail/loadable.js"
import Login from "./pages/login"

function App() {
    return (
        <Provider store={store}>
        
          
          <HashRouter>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail:id"exact component={Detail}></Route>
            <Route path="/login"exact component={Login}></Route>
          </HashRouter>
         
        </Provider>
    );
}

export default App;

//项目的根组件