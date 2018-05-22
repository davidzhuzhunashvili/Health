import { BrowserRouter, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import LandingPage from './landingPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact path='/'
            render={() =>
             <LandingPage/>}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App

