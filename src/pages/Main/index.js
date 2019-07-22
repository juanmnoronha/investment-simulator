import React from 'react';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { Container } from '../../styles/components';

export default function Main() {
  return (
    <Container>
      <Header />
      <Card>
        <h1>Simulador</h1>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Mensalidade" />
          <select placeholder="Tempo">
            <option>Tempo</option>
          </select>
          <Button type="submit" label="Simular" />
        </form>
      </Card>
    </Container>
  );
}
