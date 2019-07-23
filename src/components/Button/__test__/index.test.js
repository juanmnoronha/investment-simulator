import React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';

describe('<Button />', () => {
  it('should render properly', () => {
    const component = shallow(<Button label="foo" />);
    expect(component).toMatchSnapshot();
  });
});
