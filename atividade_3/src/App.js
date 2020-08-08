import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/App.css';

import Insert from './components/Insert';
import Home from './components/Home';
import List from './components/List';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light navbar-bg-light'>
            <Link to={'/'} className='navbar-brand'>CRUD</Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li>
                  <Link to={'/'} className='nav-link'>Home</Link>
                </li>
                <li>
                  <Link to={'/insert'} className='nav-link'>Insert</Link>
                </li>
                <li>
                  <Link to={'/list'} className='nav-link'>List</Link>
                </li>
              </ul>
            </div>
          </nav>

          <h2>Projeto CRUD</h2>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/insert' component={Insert} />
            <Route path='/list' component={List} />
          </Switch>

        </div>
      </Router>
    )
  }
}