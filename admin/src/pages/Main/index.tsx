import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Login';
import Admin from '../Admin';

const Main: FC = (props) => {  
  return (
    <Router>
      <Route path="/login" exact component={Login} />
      <Route path="/" component={Admin} />
    </Router>
  )
}

export default Main