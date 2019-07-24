import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import axio from 'axios';

import Card from '../../components/Card';
import Button from '../../components/Button';
import Header from '../../components/Header';
import api from '../../services/api';
import { Container } from '../../styles/components';
import { formatPrice } from '../../util/format';

function Result({ history }) {
  const [simulation, setSimulation] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const store = localStorage.getItem('store');
    const setStore = JSON.parse(store);
    const { monthly, time } = setStore;
    const setMonthly = monthly.replace('R$ ', '');
    const setTime = time.replace(' anos', '');
    const expression = `${setMonthly}*(((1+0.00517)^${setTime *
      12}-1)/0.00517)`;
    const source = axio.CancelToken.source();

    setLoading(true);

    async function loadResult() {
      try {
        const response = await api.get(
          `/?expr=${encodeURIComponent(expression)}`,
          {
            cancelToken: source.token,
          }
        );
        const data = {
          name: setStore.name,
          monthly: formatPrice(setMonthly),
          time: setStore.time,
          result: formatPrice(response.data),
        };

        setLoading(false);
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
      <Card loading={loading}>
        <p>
          Olá <strong>{name}</strong>, <br /> juntando{' '}
          <strong>{monthly}</strong> todo mês, você terá{' '}
          <strong>{result}</strong> em <strong>{time}</strong>.
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
