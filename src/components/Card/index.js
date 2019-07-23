import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

export default function Card({ children, icon, loading }) {
  return <Container>{loading ? icon : children}</Container>;
}

Card.defaultProps = {
  children: <div />,
  icon: <FaSpinner color="#6a4abe" size={48} />,
  loading: false,
};

Card.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  loading: PropTypes.bool,
};
