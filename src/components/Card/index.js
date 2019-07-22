import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({ children }) {
  return <Container>{children}</Container>;
}

Card.defaultProps = {
  children: <div />,
};

Card.propTypes = {
  children: PropTypes.node,
};
