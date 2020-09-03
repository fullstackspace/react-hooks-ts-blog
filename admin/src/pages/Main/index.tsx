import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Login';
import Admin from '../Admin';

const Main: React.FC = (props) => {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/index" component={Admin} />
    </Router>
  )
}

export default Main