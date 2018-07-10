import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { login, logout } from '../actions/authActions'
import axios from 'axios'

import TopBar from './topBar'
import Totals from './totals'
import SearchBox from './searchBox'
import ItemList from './itemList'

import '../css/loginForm.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value })
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()

    const postRequest = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post('/auth/login', postRequest).then((res) => {
      if (res.data.success) {
        this.props.login()
      } else {
        this.props.logout()
      }
    })
  }

  render() {
    // if (this.props.auth.isLoggedIn) {
    // return <Redirect push to='/account' />
    // } else {
    return (
      <div className='loginForm'>
        <div id='login-container'>



          <div id='inputs-container'>

            <div id='login-header'>
              <p>LOGIN</p>
            </div>

            <form onSubmit={this.handleLoginSubmit}>
              <input id='username-input' type='text' autoComplete='off' placeholder='USERNAME' name='username'
                value={this.state.username} onChange={this.handleUsernameChange} />
            </form>

            <form onSubmit={this.handleLoginSubmit}>
              <input id='password-input' type='password' autoComplete='off' placeholder='PASSWORD' name='password'
                value={this.state.password} onChange={this.handlePasswordChange} />
            </form>

            <button id='login-button' type='button' onClick={this.handleLoginSubmit}>
              LOGIN
              </button>
          </div>
        </div>
      </div>
    )
    // }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
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


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)