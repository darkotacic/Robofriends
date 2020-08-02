import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

const mockColor = 'red';
const wrapper = shallow(<CounterButton color={mockColor} />);
const componentInstance = wrapper.instance();

it('expect to render CounterButton component', () => {
  expect.assertions(1);
  expect(wrapper).toMatchSnapshot();
});

it('correctly increments the counter', () => {
  expect.assertions(1);
  //componentInstance.incrementCount();
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state('count')).toBe(1);
});

describe('Component should render', () => {
  describe('Counter button clicked', () => {
    it('component should update', () => {
      expect.assertions(1);
      const mockState = {
        count: wrapper.state('count') + 1,
      };

      expect(componentInstance.shouldComponentUpdate(null, mockState)).toBe(
        true
      );
    });
  });

  describe('Counter button not clicked', () => {
    it('component should not update', () => {
      expect.assertions(1);
      const mockState = {
        count: wrapper.state('count'),
      };

      expect(componentInstance.shouldComponentUpdate(null, mockState)).toBe(
        false
      );
    });
  });
});
