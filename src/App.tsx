import * as React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import loadable from '@loadable/component'

import Header from '@components/Header'
const HomeComponent = loadable(() => import(/* webpackChunkName: "home" */ './views/Home'))
const AboutComponent = loadable(() => import(/* webpackChunkName: "about" */ './views/About'))

class App extends React.Component {
  
  
  render() {

    return (
      <div className="app">
        <Router>
          <Header />
          <Route exact path='/' component={HomeComponent}></Route>
          <Route path='/about' component={AboutComponent}></Route>
        </Router>
      </div>
    )
  }
}

export default App