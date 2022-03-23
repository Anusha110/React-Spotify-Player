import React from 'react'
import { Route } from 'react-router-dom'
import LoginFormRoute from './LoginFormRoute/LoginFormRoute'

const loginRoute = <Route exact path='/login' component={LoginFormRoute} />

export default [loginRoute]
