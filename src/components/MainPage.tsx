import React, { Component } from 'react';
import Header from './Header';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import './MainPage.css';
import { IRobot } from '../containers/App';

export interface IMainPageProps {
  searchField: string;
  robots: Array<IRobot>;
  isPending: boolean;
  error: string;
  onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) => any;
  onRequestRobots: () => any;
}

class MainPage extends Component<IMainPageProps> {
  componentDidMount(): void {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render(): JSX.Element {
    const { onSearchChange, isPending } = this.props;
    const filteredRobots = this.filterRobots();
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

export default MainPage;
