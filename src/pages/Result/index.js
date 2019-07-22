import React from 'react';

import Card from '../../components/Card';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container } from '../../styles/components';

export default function Result() {
  return (
    <Container>
      <Header />
      <Card>
        <p>
          Olá <strong>Tobias</strong>, <br /> juntando <strong>R$ 20,00</strong>{' '}
          todo mês, você terá <strong>R$ 509,65</strong> em{' '}
          <strong>2 anos</strong>.
        </p>
        <Button type="button" label="Simular Novamente" />
      </Card>
    </Container>
  );
}
