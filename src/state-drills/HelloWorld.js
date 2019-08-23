import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { who:'world' }
  }
  handleButtonClickOne = () => {
    this.setState({ who:'world!' })
  }
  handleButtonClickTwo = () => {
    this.setState({ who:'friend!' })
  }
  handleButtonClickThree = () => {
    this.setState({ who:'React!' })
  }
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={this.handleButtonClickOne}>
          World
        </button>
        <button onClick={this.handleButtonClickTwo}>
          Friend
        </button>
        <button onClick={this.handleButtonClickThree}>
          React
        </button>
      </div>
    )
  }
}

export default HelloWorld; 