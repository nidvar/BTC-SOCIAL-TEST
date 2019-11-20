import React from 'react';
import TodoList from './TodoList'
import About from './About'
import Api from './Api'
import { Route, Switch, NavLink } from 'react-router-dom'

import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <h1>BTC SOCIAL</h1>
      <div className='mynav'>
        <NavLink to='/about'><p>About</p></NavLink>
        <NavLink to='/api'><p>API TEST</p></NavLink>
        <NavLink to='/posts'><p>Posts</p></NavLink>
      </div>
      <Switch>
        <Route exact path='/api' component={Api} />
        <Route exact path='/about' component={About} />
        <Route exact path='/posts' component={TodoList} />
      </Switch>
    </div>
  );
}

export default App;