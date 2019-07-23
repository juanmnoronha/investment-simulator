import React from 'react';
import { shallow } from 'enzyme';

import Card from '../index';

describe('<Card />', () => {
  it('should render properly', () => {
    const component = shallow(<Card />);
    expect(component).toMatchSnapshot();
  });
});
