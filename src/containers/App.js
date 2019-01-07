import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
  }
}

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
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        {robots.length === 0
          ? <p> Loading... </p>
          : <Scroll> <ErrorBoundary> <CardList robots={filteredRobots} /> </ErrorBoundary> </Scroll>}
      </div>
    ) 
  }
}

export default connect(mapStateToProps)(App);
