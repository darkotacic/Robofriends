import React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App';

const CardList = ({ robots }: { robots: Array<IRobot> }) => {
  return (
    <div>
      {robots.map((robot: IRobot) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
