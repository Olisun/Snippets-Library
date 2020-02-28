// Implementing a cascading dropdown function for a form

import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Select from 'react-select'
import './style.css';
import 'react-select/dist/react-select.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      selectedOption: {},
      selectedOption2: {}
    };
  }

  handleChange1 = (selectedOption) => {
    this.setState({ selectedOption });
  };

  handleChange2 = (selectedOption) => {
    this.setState({ selectedOption2: selectedOption })
  }

  render() {
    const options1 = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];

    const options2 = [
      { value: 'one-a', label: 'One A', link: 'one' },
      { value: 'one-b', label: 'One B', link: 'one' },
      { value: 'two-a', label: 'Two A', link: 'two' },
      { value: 'two-b', label: 'Two B', link: 'two' }
    ];

    const filteredOptions = options2.filter((o) => o.link === this.state.selectedOption.value)

    return (
      <div>
        <p>Select one first</p>
        <Select
          name="form-field-name"
          value={this.state.selectedOption.value}
          onChange={this.handleChange1}
          options={options1}
        />
        <p>Then the other</p>
        <Select
          name="form-field-name"
          value={this.state.selectedOption2.value}
          onChange={this.handleChange2}
          options={filteredOptions}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));