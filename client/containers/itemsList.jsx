import React from 'react'
import { connect } from 'react-redux'
import { removeCalorie, toggleEnabled } from '../actions/caloriesActions'

import SearchBox from './searchBox'

import '../css/itemsList.css'

class ItemList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enabled: []
    }
  }

  handleX = (event, index) => {
    this.props.removeCalorie(index)
    event.stopPropagation();
  }

  handleItem = (index) => {
    this.props.toggleEnabled(index)
  }

  render() {
    const caloriesList = this.props.calories.caloriesList

    return (
      <div id='itemsList'>
        <div className='title-container'>
          {/* <p>Items List</p> */}
        </div>

        <div className='list-container'>
          {caloriesList.map((calorieItem, index) => {
            const nutrients = calorieItem.info.nutrients
            const [protein, sugars, fibers, sodium] = [
              `${nutrients[203].value}${nutrients[203].unit}`,
              `${nutrients[269].value}${nutrients[269].unit}`,
              `${nutrients[291].value}${nutrients[291].unit}`,
              `${nutrients[307].value}${nutrients[307].unit}`
            ]

            return (
              <div className='item-and-description' key={index} onClick={() => this.handleItem(index)}>
                <div className='item-container' >
                  <p className='name'>{calorieItem.info.name}</p>
                  <div className='vr'></div>
                  <p className='calories'>{`${calorieItem.calories} Kcals`}</p>
                  <div className='vr'></div>
                  <p className='list-amount'>{`${calorieItem.amount} grams`}</p>
                  <i className="far fa-times-circle" onClick={(event) => this.handleX(event, index)}></i>
                </div>
                {(calorieItem.enabled) ?
                  <div className='description-container'>
                    <div className='left'>
                      <p className='left-align'>Protein: </p>
                      <p className='right-align'>{protein}</p>

                      <p className='left-align'>Sugars: </p>
                      <p className='right-align'>{sugars}</p>

                      <p className='left-align'>Fibers: </p>
                      <p className='right-align'>{fibers}</p>

                      <p className='left-align'>Sodium: </p>
                      <p className='right-align'>{sodium}</p>
                    </div>
                    <div className='right'>
                    </div>

                  </div> : ''}
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
    },
    toggleEnabled: (index) => {
      dispatch(toggleEnabled(index))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemList)