import React from 'react'
import Cookies from 'js-cookie'
import { Redirect, Route } from 'react-router-dom'
import { ACCESS_TOKEN } from '../../utils/StorageUtils'

interface ProtectedRouteType {
   exact?: boolean
   path: string
   component: React.ComponentType<any>
}

const ProtectedRoute = (props: ProtectedRouteType) => {
   const token = Cookies.get(ACCESS_TOKEN)

   if (token === undefined) {
      return <Redirect to='/login' />
   }

   return <Route {...props} />
}

export default ProtectedRoute
