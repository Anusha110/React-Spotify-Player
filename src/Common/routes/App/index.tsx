import { Provider } from 'mobx-react'
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import i18n from '../../i18n'
// import stores from '../../stores'
import Routes from '../index'
// import stores from '../../stores'

import './App.css'
import loginFormRoute from '../../../Authentication/routes'
import reactSpotifyPlayerRoutes from '../../../ReactSpotifyPlayer/routes'
import LoginFormRoute from '../../../Authentication/routes/LoginFormRoute/LoginFormRoute'

const App = () => (
   // <Provider {...stores}>
   <Switch>
      <Route exact path='/login' component={LoginFormRoute} />
      {reactSpotifyPlayerRoutes}
   </Switch>
   // </Provider>
)

export default App
