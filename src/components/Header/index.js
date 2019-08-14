import React from 'react';

import logo from '../../assets/ciclic-white.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Ciclic" />
    </Container>
  );
}
