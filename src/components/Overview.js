import React, { Component } from 'react'

class Overview extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    const { tasks } = this.props;
    const listItems = tasks.map((task, index) => 
      <li key={index}>{task}</li>
    );

    return (
      <div className="overview">
        <h1>Tasks</h1>
        <ul className="task-list">
          {listItems}
        </ul>
      </div>
    )
  }
}

export default Overview