import React, { Component } from 'react'

class ControlledInput extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleNameChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleNameChange}/>
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleNameChange}/>
      </form>
    )
  }
}

export default ControlledInput
