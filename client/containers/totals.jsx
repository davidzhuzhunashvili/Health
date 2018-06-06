import React from 'react'
import { connect } from 'react-redux'

import '../css/totals.css'


/* IN FUTURE MAKE SURE TO PASS ARRAY AS PROP RATHER THAN ACCESSING STORE */
class Totals extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      max: 2000
    }
  }

  render() {
    const caloriesList = this.props.calories.caloriesList
    const totalCals = (caloriesList.length > 0) ? caloriesList.reduce((x, y) => x + y) : 0

    return (
      <div className='totals'>
        <div className='total-container'>
          <p>Total: {totalCals}</p>
        </div>

        <div className='remaining-container'>
          <p>Remaining: {this.state.max - totalCals}</p>
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


export default connect(mapStateToProps)(Totals)