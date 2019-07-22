import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

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

  function handleInputChange(e) {
    e.persist();

    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const body = `{ "expr": "${
        values.monthly
      } * (((1 + 0.00517) ^ ${values.time * 12} - 1) / 0.00517)" }`;
      const response = await api.post(`/`, body);

      history.push('/resultado');

      setValues(initialState);

      console.log(response.data);
    } catch (err) {
      console.log(err);
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

Main.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Main);
