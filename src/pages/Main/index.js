import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Input from 'react-number-format';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { Container } from '../../styles/components';
import api from '../../services/api';

function Main({ history }) {
  const initialState = {
    name: '',
    monthly: '',
    time: '',
  };
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    e.persist();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { monthly, time } = values;
    const setMonthly = monthly.replace('R$ ', '');
    const setTime = time.replace(' anos', '');
    setLoading(true);
    try {
      const body = `{ "expr": "${setMonthly} * (((1 + 0.00517) ^ ${setTime *
        12} - 1) / 0.00517)" }`;
      await api.post(`/`, body);
      setLoading(false);
      setValues(initialState);
      history.push('/resultado');
      localStorage.setItem('store', JSON.stringify(values));
    } catch (err) {
      throw new Error('Erro ao fazer a simulação');
    }
  }

  const { name, monthly, time } = values;

  return (
    <Container>
      <Header />
      <Card>
        <h1>Simulador</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            value={name}
            placeholder="Nome"
            onChange={handleInputChange}
          />
          <Input
            name="monthly"
            value={monthly}
            placeholder="Mensalidade"
            prefix="R$ "
            onChange={handleInputChange}
          />
          <Input
            name="time"
            value={time}
            placeholder="Tempo"
            suffix=" anos"
            onChange={handleInputChange}
          />
          <Button type="submit" label="Simular" loading={loading} />
        </form>
      </Card>
    </Container>
  );
}

Main.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Main);
