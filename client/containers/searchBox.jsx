import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Select from 'react-select'

import { addCalorie } from '../actions/caloriesActions'

import '../css/searchBox.css'
import '../css/react-select.css'

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      query: '',
      selectedOption: '',
      selectDisabled: true,
      amount: 100,
      calories: ''
    }
  }

  handleSelection = (selectedOption) => {
    const calories = this.state.searchResults[selectedOption.value].nutrients['208'].value

    this.setState({
      selectedOption,
      calories: parseInt(calories) / 100
    })
  }

  handleSearchChange = (event) => {
    this.setState({ query: event.target.value })
  }


  handleSearchSubmit = (event) => {
    axios.get('/nutrition', { params: { query: this.state.query } }).then((res) => {
      if (res.data.length > 0) {
        const calories = res.data[0].nutrients['208'].value
        this.setState({
          searchResults: res.data,
          selectDisabled: false,
          selectedOption: { label: res.data[0].name, value: 0, className: 'select-options' },
          calories: parseInt(calories) / 100
        })
      } else {
        this.setState({
          searchResults: res.data,
          selectDisabled: true,
          selectedOption: '',
          calories: '',
        })
      }
    })

    event.preventDefault()
  }

  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value })
  }

  handlePlusSubmit = (event) => {
    if (typeof this.state.calories === 'number' && !isNaN(this.state.calories)) {
      this.props.addCalorie({
        calories: this.state.calories * this.state.amount,
        amount: this.state.amount*1,
        info: this.state.searchResults[this.state.selectedOption.value],
        enabled: false
      })
    }
    event.preventDefault()
  }

  render() {
    const options = this.state.searchResults.map((item, index) => {
      return { label: item.name, value: index, className: 'select-options' }
    })

    const { selectedOption } = this.state

    return (
      <div id='searchBox'>
        <div className='row'>
          <div className='column-0'>
            <div className='search-container'>
              <form onSubmit={this.handleSearchSubmit}>
                <input id='search-input' type='text' autoComplete='off' placeholder='Search...' name='search' value={this.state.query} onChange={this.handleSearchChange} />
                <button id='search-button' type='submit'>
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>

            <div className='search-results-container'>
              <Select
                name='form-field-name'
                value={selectedOption}
                onChange={this.handleSelection}
                options={options}
                searchable={false}
                clearable={false}
                disabled={this.state.selectDisabled}
              />
            </div>
          </div>
          <div className='column-1'>
            <div className='nutrition-info'>
              <p id='calories'>
                {(typeof this.state.calories === 'number' && !isNaN(this.state.calories)) ? Math.round(this.state.amount * this.state.calories * 100) / 100
                  + ' calories' : '---'}
              </p>
            </div>

            <div className='amount'>
              <form onSubmit={this.handlePlusSubmit}>
                <input id='amount-input' type='number' autoComplete='off' min='0' max='10000' name='search' value={this.state.amount} onChange={this.handleAmountChange} />
                <p>g</p>
                <button id='plus-button' type='submit'>
                  <i className="fa fa-plus"></i>
                </button>
              </form>
            </div>
          </div>
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
    addCalorie: (calorie) => {
      dispatch(addCalorie(calorie))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)