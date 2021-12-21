import './App.css';
import React, { Component } from 'react'
import Overview from './components/Overview'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    this.state = {tasks: ['Finish this app', 'Fuck bitches, get money']}

    return (
      <div className="app">
        <Overview tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default App;
