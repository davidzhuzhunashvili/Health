import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import LoginForm from '../containers/loginForm'
import TopBar from '../containers/topBar'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    if (this.props.auth.isLoggedIn === '') {
      return (
        <div></div>
      )
    } else if (this.props.auth.isLoggedIn) {
      return <Redirect push to='/account' /> 
    } else {
      return (
        <div>
          <TopBar />
          <LoginForm />
        </div>
      )
    }
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(LoginPage)