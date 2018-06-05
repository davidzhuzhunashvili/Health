import React from 'react'
import { connect } from 'react-redux'

class ItemList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props)

    return (
      <p>HI</p>
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
    //removeCalorie: (calorie) => { dispatch(removeCalorie(calorie)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemList)