import React from 'react'

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

export default AccountPage