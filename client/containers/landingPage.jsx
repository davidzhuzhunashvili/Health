import React from 'react'

import SearchBox from './searchBox'
import ItemList from './itemsList'
// import Test from '../components/test'
import Totals from './totals'


import '../css/landingPage.css'

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Totals />
        <SearchBox />
        <ItemList />
      </div>

    )
  }
}


export default LandingPage