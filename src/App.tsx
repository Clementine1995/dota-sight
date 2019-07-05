/** @format */

import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import loadable from '@loadable/component'

import Header from '@components/Header'
import routes from './router/routes'
import RouteWithSubRoutes from './router/index'

const Home = loadable(() => import(/* webpackChunkName: "home" */ './views/Home'))

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <main>
            <Route exact path="/" component={Home}></Route>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </main>
        </Router>
      </div>
    )
  }
}

export default App
