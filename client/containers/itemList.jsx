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
            // const nutrients = calorieItem.info.nutrients
            // const amount = calorieItem.amount/100

            // const [protein, sugars, fibers, sodium] = [
              // `${(Math.round(nutrients[203].value*amount*100)/100).toFixed(2)}${nutrients[203].unit}`,
              // `${(Math.round(nutrients[269].value*amount*100)/100).toFixed(2)}${nutrients[269].unit}`,
              // `${(Math.round(nutrients[291].value*amount*100)/100).toFixed(2)}${nutrients[291].unit}`,
              // `${(Math.round(nutrients[307].value*amount*100)/100).toFixed(2)}${nutrients[307].unit}`
            // ]

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
                  <Description item={{ item: calorieItem.info, amount: calorieItem.amount/100 }} />
                  // <div className='description-container'>
                    // <div className='left'>
                      // <p className='left-align'>Protein: </p>
                      // <p className='right-align'>{protein}</p>
// 
                      // <p className='left-align'>Sugars: </p>
                      // <p className='right-align'>{sugars}</p>
// 
                      // <p className='left-align'>Fibers: </p>
                      // <p className='right-align'>{fibers}</p>
// 
                      // <p className='left-align'>Sodium: </p>
                      // <p className='right-align'>{sodium}</p>
                    // </div>
                    // <div className='right'>
                    // </div>

                  // </div> 
                  : ''}
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