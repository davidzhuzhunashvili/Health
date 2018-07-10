import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { login, logout } from '../actions/authActions'

import TopBar from './topBar'
import Totals from './totals'
import SearchBox from './searchBox'
import ItemList from './itemList'

import axios from 'axios'

class AccountPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: 'false'
    }
  }


  render() {
    if (!this.props.auth.isLoggedIn) {
      return <Redirect push to='/login' />
    } else {
      return (
        <div>
          <TopBar />
          <Totals />
          <SearchBox />
          <ItemList />
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

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => {
      dispatch()
    }
  }
}


export default connect(mapStateToProps)(AccountPage)