import React from 'react'
import Cookies from 'js-cookie'
import { Redirect, Route } from 'react-router-dom'

interface ProtectedRouteType {
   exact?: boolean
   path: string
   component: React.ComponentType<any>
}

const ProtectedRoute = (props: ProtectedRouteType) => {
   const token = Cookies.get('pa_token')
   console.log('token in protected route', token)

   if (token === undefined) {
      return <Redirect to='/login' />
   }

   return <Route {...props} />
}

export default ProtectedRoute
