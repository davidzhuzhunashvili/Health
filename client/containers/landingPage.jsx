import React from 'react'

import SearchBox from './searchBox'
import Test from '../components/test'

import '../css/landingPage.css'

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Initialized!</h1>
        <SearchBox />
      </div>

    )
  }
}

export default LandingPage