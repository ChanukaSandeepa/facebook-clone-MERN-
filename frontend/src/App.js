import React, { useEffect, useState } from 'react';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css'
import Widgets from './components/Widgets';
import Login from './components/Login';
import AppContext, { useAppContext } from './config/AppContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  // const [{ user } , dispatch] = useAppContext()
  useEffect(() => {
    document.title = "Facebook"
    const name = "Chanuka sandeepa"
    const rt = name.replace("s", "f")
    console.log(rt)
  }, [])

  // useEffect(() => {
  //   if(user){
  //     setLogin(true)
  //   }
  // },[user])

  return (
    <AppContext>
      <div className="app">
        <Header />
        <Router>
          <Switch>
            <Route path="/">
              <div className="app_body">
                <div className="app-sidebar">
                  <Sidebar />
                </div>
                <div className="app-feed">
                  <Feed />
                </div>
                <div className="app-widgets">
                  <Widgets />
                </div>
              </div>
            </Route>
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    </AppContext>

  );
}

export default App;
