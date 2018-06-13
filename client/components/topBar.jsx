import React from 'react'
import { withRouter } from 'react-router-dom'


import '../css/topBar.css'

class TopBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleHome = (event) => {
    this.props.history.push('/')
  }

  handleAccount = (event) => {
    this.props.history.push('/account')
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
              <p id='account-link' onClick={this.handleAccount}>Account</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(TopBar)