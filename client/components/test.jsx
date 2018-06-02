import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css'

class Test extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
		// selectedOption can be null when the `x` (close) button is clicked
		if (selectedOption) {
    	console.log(`Selected: ${selectedOption.label}`);
		}
  }
  render() {
  	const { selectedOption } = this.state;

    return (
      <Select
        name="form-field-name"
        value={selectedOption}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />
    );
  }
}

export default Test