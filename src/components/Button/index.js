import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ label, onClick }) {
  return <Container onClick={onClick}>{label}</Container>;
}

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
