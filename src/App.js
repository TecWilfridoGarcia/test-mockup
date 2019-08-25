import React from 'react';
import logo from '../src/images/logo.png';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Message from './components/Message';
import WishLists from './components/Wishlists';
import Settings from './components/Settings';
import MyAccount from './components/My-account';
import Filter from './components/Filter';

function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
          <div className="col-sm-3 logo">
            <img src={logo} />
          </div>
            <div className="col-sm-9">
            <nav>
              <div className="menu-main" id="navbarsExampleDefault">
                <ul className="menu-list">
                  <li className="menu-item">
                    <NavLink to="/" activeClassName="active" className="navlink" exact={true}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                      <h6 className="menu-item-title">Home</h6>
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/message" activeClassName="active" className="navlink" exact={true}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>                    
                      <h6 className="menu-item-title">Message</h6>
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/wishlists" activeClassName="active" className="navlink" exact={true}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>
                      <h6 className="menu-item-title">WishLists</h6>
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/setting" activeClassName="active" className="navlink" exact={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"/></svg>
                    <h6 className="menu-item-title">Settings</h6>
                    </NavLink>
                  </li>
                  <li className="menu-item">
                  <NavLink to="/my-account" activeClassName="active" className="navlink" exact={true}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/><path d="M0 0h24v24H0z" fill="none"/></svg> 
                  <h6 className="menu-item-title">My account</h6>
                  </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            </div>
          </div>
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-9">
             <main role="main">
              <Switch>
                <Route path="/" component={Home} exact={true}></Route>
                <Route path="/message" component={Message} exact={true}></Route>
                <Route path="/wishlists" component={WishLists} exact={true}></Route>
                <Route path="/settings" component={Settings} exact={true}></Route>
                <Route path="/my-account" component={MyAccount} exact={true}></Route>
              </Switch>
            </main>
          </div>
        </div>
           
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
