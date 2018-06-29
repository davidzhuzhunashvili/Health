import React from 'react'
import { connect } from 'react-redux'
import { logIn, logout } from '../actions/authActions'

import TopBar from '../components/topBar'
import Totals from './totals'
import SearchBox from './searchBox'
import ItemList from './itemList'

class AccountPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
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


export default AccountPage