import './App.css';
import React, { Component } from 'react'
import Overview from './components/Overview'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let newTasksList = this.state.tasks
    newTasksList.push(this.state.value)
    this.setState({tasks: newTasksList})
    this.setState({value: ''})
    event.preventDefault();
  }

  render() {
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <label>
            <strong>Add a task:</strong>
            <br />
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Overview tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default App;
