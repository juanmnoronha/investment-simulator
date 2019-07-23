import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Card from '../../components/Card';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container } from '../../styles/components';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

function Result({ history }) {
  const [simulation, setSimulation] = useState({});

  useEffect(() => {
    const store = localStorage.getItem('store');
    const setStore = JSON.parse(store);
    const { monthly, time } = setStore;
    const expression = `${monthly}*(((1+0.00517)^${time * 12}-1)/0.00517)`;

    async function loadResult() {
      try {
        const response = await api.get(
          `/?expr=${encodeURIComponent(expression)}`
        );
        const data = {
          name: setStore.name,
          monthly: formatPrice(setStore.monthly),
          time: setStore.time,
          result: formatPrice(response.data),
        };

        setSimulation(data);
      } catch (err) {
        console.log(err);
      }
    }

    loadResult();
  }, []);

  function handleBack() {
    history.push('/');
    localStorage.clear();
  }

  const { name, monthly, time, result } = simulation;

  return (
    <Container>
      <Header />
      <Card>
        <p>
          Olá <strong>{name}</strong>, <br /> juntando{' '}
          <strong>{monthly}</strong> todo mês, você terá{' '}
          <strong>{result}</strong> em <strong>{time} anos</strong>.
        </p>
        <Button type="button" label="Simular Novamente" onClick={handleBack} />
      </Card>
    </Container>
  );
}

Result.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Result);
