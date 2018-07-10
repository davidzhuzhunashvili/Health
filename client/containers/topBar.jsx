import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import TopBarDropdown from './topBarDropdown'

import '../css/topBar.css'

class TopBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: false
    }
  }

  handleHome = (event) => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='topBar'>
        <div className='top-margin'>
          <div className='links'>
            <div className='links-left'>
              <p id='home-link' onClick={this.handleHome}>Home</p>
            </div>

            <div className='links-right'>
              <TopBarDropdown />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default withRouter(connect(mapStateToProps)(TopBar))