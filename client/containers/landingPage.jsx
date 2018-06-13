import React from 'react'
import { connect } from 'react-redux'

import { setSelected } from '../actions/selectedActions'

import SearchBox from './searchBox'
// import Test from '../components/test'
import Totals from './totals'
import TopBar from '../components/topBar'
import Description from '../components/description'


import '../css/landingPage.css'

class LandingPage extends React.Component {


  render() {
    return (
      <div>
        <TopBar />
        <SearchBox style='generic' />
        <div className='landing-page-description'>
          <Description item={this.props.selected} />
        </div>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.selected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelected: (item) => {
      dispatch(setSelected(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)