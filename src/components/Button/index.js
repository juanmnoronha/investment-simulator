import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

export default function Button({ icon, label, loading, onClick }) {
  return <Container onClick={onClick}>{loading ? icon : label}</Container>;
}

Button.defaultProps = {
  onClick: () => null,
  loading: false,
  icon: <FaSpinner color="#fff" size={24} />,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  icon: PropTypes.node,
};
