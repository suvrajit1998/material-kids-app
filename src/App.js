import React from 'react'

import './App.scss'

import { Route, Switch } from 'react-router-dom'

import Header from './components/headre/headre.component'

import { HomePage } from './pages/homepage/homepage.components'
import { ProfilePage } from './pages/profilepage/profilepage.component'
import { ConnectPage } from './pages/connectPage/connectPage.component'
import { Fotter } from './components/fotter/fotter.component'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/aboutus" component={ProfilePage} />
        <Route path="/connect" component={ConnectPage} />
      </Switch>
      <Fotter />
    </div>
  )
}

export default App
