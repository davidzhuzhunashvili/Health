import React from 'react'
import { connect } from 'react-redux'
import { logIn, logout } from '../actions/authActions'

import TopBar from '../components/topBar'
import Totals from './totals'
import SearchBox from './searchBox'
import ItemList from './itemList'

class LogInForm extends React.Component {
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
    console.log('HELLO')
    event.preventDefault()
  }

  

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleLoginSubmit}>
          <input type='text' autoComplete='off' placeholder='Username' name='username' 
          value={this.state.username} onChange={this.handleUsernameChange} />
        </form>

        <form onSubmit={this.handleLoginSubmit}>
          <input type='password' autoComplete='off' placeholder='Password' name='password' 
          value={this.state.password} onChange={this.handlePasswordChange} />
        </form>

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => {
      dispatch(logIn())
    },
    logOut: () => {
      dispatch(logOut())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogInForm)