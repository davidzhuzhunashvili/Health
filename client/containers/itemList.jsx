import React from 'react'
import { connect } from 'react-redux'
import { removeCalorie, toggleEnabled } from '../actions/caloriesActions'

import SearchBox from './searchBox'
import Description from '../components/description'

import '../css/itemList.css'

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
                {(calorieItem.enabled) ? (
                  <Description item={{ item: calorieItem.info, amount: calorieItem.amount / 100 }} />
                ) : (
                  ''
                )}
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