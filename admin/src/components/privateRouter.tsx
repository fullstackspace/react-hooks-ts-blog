import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Iprops {
  component: any,
  [propName: string]: any
}

const PrivateRouter = (props: Iprops) => {
  const { component: Component, ...rest } = props
  return (
    <Route {...rest} render={routeProps => (
      true ? <Component {...routeProps} /> : <Redirect to="/login" />
    )}></Route>
  )
}

export default PrivateRouter