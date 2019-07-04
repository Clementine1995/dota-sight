/** @format */

import React from 'react'
import { Route } from 'react-router-dom'

interface IRoute {
  path?: string
  component: any
  routes?: IRoute[]
}

function RouteWithSubRoutes(route: IRoute) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

export default RouteWithSubRoutes
