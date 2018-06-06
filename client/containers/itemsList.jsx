import React from 'react'
import { connect } from 'react-redux'
import { removeCalorie } from '../actions/caloriesActions'

import SearchBox from './searchBox'

import '../css/itemsList.css'

class ItemList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleX = (index) => {
    this.props.removeCalorie(index)
  }

  render() {
    const caloriesList = this.props.calories.caloriesList

    return (
      <div id='itemsList'>
        <div className='title-container'>
          <p>Items List</p>
        </div>

        <div className='list-container'>
          {caloriesList.map((calorie, index) => {
            return (
              <div className='item-container' key={index}>
                <p>{calorie}</p>
                <i className="far fa-times-circle" onClick={() => this.handleX(index)}></i>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    calories: state.calories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeCalorie: (calorie) => {
      dispatch(removeCalorie(calorie))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemList)