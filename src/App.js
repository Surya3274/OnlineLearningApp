import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <div>
      <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          {/* Add more routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
