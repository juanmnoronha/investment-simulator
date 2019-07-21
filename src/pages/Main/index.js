import React from 'react';

import Header from '../../components/Header';
import { Wrapper, Content } from '../../styles/components';

import { StyledContainer as Container, Form } from './styles';

export default function Main() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Content>
          <h1>Simulador</h1>
          <Form>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Mensalidade" />
            <select placeholder="Tempo">
              <option>Tempo</option>
            </select>
            <button type="submit">Simular</button>
          </Form>
        </Content>
      </Container>
    </Wrapper>
  );
}
