import React from 'react'
import { connect } from 'react-redux'

import { setSelected } from '../actions/selectedActions'

import GenericSearchBox from './genericSearchBox'
import Totals from './totals'
import TopBar from '../components/topBar'
import Description from '../components/description'

// TEMPORARY
import Test from '../components/test'
import LogInForm from './logInForm'

import '../css/landingPage.css'

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <div id='search'>
          <p>Search</p>
        </div>

        <GenericSearchBox />

        <div className='landing-page-description'>
          <Description item={this.props.selected} />
        </div>

        <LogInForm />


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