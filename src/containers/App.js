import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    let scroll;
    if (!filteredRobots.length) {
      scroll = <h1>Oooops. No robots with that name</h1>;
    } else {
      scroll = (
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      );
    }
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        {scroll}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
