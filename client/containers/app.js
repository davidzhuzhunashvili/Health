import { BrowserRouter, Route } from 'react-router-dom'
import { Redirect, Switch } from 'react-router'
import { connect } from 'react-redux'
import { login, logout } from '../actions/authActions'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import LandingPage from './landingPage'
import ErrorPage from '../components/errorPage'
import AccountPage from '../containers/accountPage'
import LoginPage from '../containers/loginPage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount = () => {
    axios.get('/auth/authenticated').then((res) => {
      if (res.data.authenticated) {
        this.props.login()
      } else {
        this.props.logout()
      }
    })
  }

  

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' render={() => <LandingPage />} />
            <Route exact path='/account' render={() => <AccountPage />} />
            <Route exact path='/login' render={() => <LoginPage />} />
            <Route render={(props) => <ErrorPage props={props} />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(login())
    },
    logout: () => {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

