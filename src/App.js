import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()
      .then(robots => this.setState({ robots })));
  }
  
  render() {
    const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        {this.state.robots.length === 0
          ? <p> Loading... </p>
          : <Scroll> <CardList robots={filteredRobots} /> </Scroll>}
      </div>
    ) 
  }
}

export default App;
