import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  it('should render properly', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
