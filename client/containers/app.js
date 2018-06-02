import { BrowserRouter, Route } from 'react-router-dom'
import { Redirect, Switch } from 'react-router'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import LandingPage from './landingPage'
import ErrorPage from '../components/errorPage'

class App extends Component {
  render() {
    //axios.get('/nutrition', { params: { a: 'a', b: 'b' }})
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' render={() => <LandingPage />} />
            <Route render={(props) => <ErrorPage props={props} />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

