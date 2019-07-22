import React, { useState } from 'react';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { Container } from '../../styles/components';

export default function Main() {
  const initialState = {
    name: '',
    monthly: '',
    time: '',
  };

  const [values, setValues] = useState(initialState);

  function handleInputChange(e) {
    e.persist();

    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    if (e) e.preventDefault();
    setValues(initialState);
  }

  const { name, monthly, time } = values;

  return (
    <Container>
      <Header />
      <Card>
        <h1>Simulador</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            onChange={handleInputChange}
            value={name}
          />
          <input
            type="text"
            name="monthly"
            placeholder="Mensalidade"
            onChange={handleInputChange}
            value={monthly}
          />
          <input
            type="text"
            name="time"
            placeholder="Tempo"
            onChange={handleInputChange}
            value={time}
          />
          <Button type="submit" label="Simular" />
        </form>
      </Card>
    </Container>
  );
}
