import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots,
      searchField: '',
    }
  }

  onSearchChange(event) {
    this.setState({ searchField: event.target.value })
    const filteredRobots = this.state.robots.filter(robot => robot.name.includes(this.searchField) || robot.email.includes(this.searchField))
    this.setState({ robots: filteredRobots })
  }

  render() {
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <CardList robots={this.state.robots} />
      </div>
    ) 
  }
}

export default App;
