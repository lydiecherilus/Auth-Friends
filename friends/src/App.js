import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/protected">Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/protected" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;