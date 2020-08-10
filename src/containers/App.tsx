import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import './App.css';
import { setSearchField, requestRobots } from '../actions';
import { IMainPageProps } from '../components/MainPage';

const mapStateToProps = (state: IAppState) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) =>
      dispatch(setSearchField(event.currentTarget.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

interface IAppProps {}

interface ISearchRobotsState {
  searchField: string;
}

interface IRequestRobotsState {
  isPending: boolean;
  error: string;
  robots: Array<IRobot>;
}

interface IAppState {
  requestRobots: IRequestRobotsState;
  searchRobots: ISearchRobotsState;
}

class App extends Component<IMainPageProps, IAppState> {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
