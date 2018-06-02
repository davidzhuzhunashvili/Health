import React from 'react'
import axios from 'axios'
import Select from 'react-select'

import '../css/searchBox.css'
import '../css/react-select.css'

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      query: '',
      selectedOption: '',
      disabled: true

    }
  }

  handleSubmit = (event) => {
    axios.get('/nutrition', { params: { query: this.state.query } }).then((res) => {
      if (res.data.length > 0) {
        this.setState({
          searchResults: res.data,
          disabled: false,
          selectedOption: { label: res.data[0].name, value: 0, className: 'select-options' }
        })
      } else {
        this.setState({
          searchResults: res.data,
          disabled: true,
          selectedOption: ''
        })
      }
    })

    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value })
  }

  handleSelection = (selectedOption) => {
    this.setState({ selectedOption })
  }

  render() {
    const options = this.state.searchResults.map((item, index) => {
      return { label: item.name, value: index, className: 'select-options' }
    })

    const { selectedOption } = this.state

    return (
      <div id='searchBox'>
        <div className='row'>
          <div className='column' style={{ background: 'white' }}>
            <div className='search-container'>
              <form onSubmit={this.handleSubmit}>
                <input id='search-input' type='text' autoComplete='off' placeholder='Search...' name='search' value={this.state.query} onChange={this.handleChange} />
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
                disabled={this.state.disabled}
              />
            </div>
          </div>
          <div className='column' style={{ background: 'grey' }}>
            <div className='nutrition-info'>
              <p id='calories'>{(this.state.searchResults.length > 0 && this.state.selectedOption) ?
                this.state.searchResults[this.state.selectedOption.value].nutrients['208']
                  .value + ' Calories' : 'nothing yet'}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBox