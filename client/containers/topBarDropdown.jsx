import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { logout } from '../actions/authActions'
import { toggle } from '../actions/dropdownActions'

import '../css/topBarDropdown.css'

class TopBarDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutside)
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node
  }

  handleOutside = (event) => {
    const account = event.target.innerHTML === 'Account'
    if (!account && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.toggleDropdown()
    }
  }

  handleLogin = (event) => {
    this.props.history.push('/login')
  }

  toggleDropdown = (event) => {
    this.setState({ show: !this.state.show })
  }

  handleAccount = (event) => {
    this.props.history.push('/account')
  }

  handleSettings = (event) => {
  }

  handleLogout = (event) => {
    axios.get('/auth/logout').then((res) => {
      if (res.data.logout) {
        this.props.logout()
      }
    })
  }

  render() {
    if (!this.props.auth.isLoggedIn) {
      return (
        <div className='topbarDropdown'>
          <p onClick={this.handleLogin}>Login</p>
        </div>
      )
    }

    return (
      <div className='topbarDropdown noselect'>
        <p onClick={this.toggleDropdown}>Account</p>

        {(this.state.show) ? (
          <div ref={this.setWrapperRef}>
            <div id='dropdown'>
              <ul>
                <li id='top-item'>
                  <p onClick={this.handleAccount}>Account Page</p>
                </li>
                <li >
                  <p onClick={this.handleSettings}>Settings</p>
                </li>
                <li id='bottom-item' >
                  <p onClick={this.handleLogout}>Logout</p>
                </li>
              </ul>
            </div>
          </div>
        ) : (
            null
          )}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    dropdown: state.dropdown
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout())
    },
    toggle: () => {
      dispatch(toggle())
    },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBarDropdown))

