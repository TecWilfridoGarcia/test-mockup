import React from 'react';
import logo from './logo.svg';
import home from '../src/images/24px.svg';
import message from '../src/images/message.svg';
import star from '../src/images/star.svg';
import account from '../src/images/account.svg';
import settings from '../src/images/settings.svg';
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
          <div className="col-3">
            <img src={logo} />
          </div>
            <div className="col-9">
            <nav className="">
              <NavLink to="/" className="navbar-brand" activeClassName="active" exact={true}></NavLink>
              <div className="menu-main" id="navbarsExampleDefault">
                <ul className="menu-list">
                  <li className="menu-item">
                    <NavLink to="/" className="" activeClassName="active" exact={true}>
                     <img className="icon-menu" src={home} /> 
                     <h6>Home</h6>
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/message" className="" activeClassName="active" exact={true}>
                    <img className="icon-menu" src={message} />
                      Message
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/wishlists" className="" activeClassName="active" exact={true}>
                    <img className="icon-menu" src={star} />
                      WishLists</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/setting" className="" activeClassName="active" exact={true}>
                    <img className="icon-menu" src={settings} />Settings</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/my-account" className="" activeClassName="active" exact={true}>
                    <img className="icon-menu" src={account} />My account</NavLink>
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
