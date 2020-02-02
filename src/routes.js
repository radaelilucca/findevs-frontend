import React from 'react'

import SignUp from './pages/SignUp'
import SignIn from './pages/Login'
import Main from './pages/Main'

import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"

import {isAuthenticaded} from './services/auth'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
  {...rest}
  render={props =>
  isAuthenticaded() ? (
    <Component {...props} />
  ) : (
    <Redirect to={{pathname: '/', state: {from: props.location}}} />
  )

}
/>
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path='/' component={() => <SignIn/>} />
        <Route exact path="/signup" component={() => <SignUp/>} />
        <Route path="/main" component={() => <Main/>} />
        <Route path='*' component={() => <h1>404 - Page Not Found</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes;