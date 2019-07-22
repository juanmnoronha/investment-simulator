import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Card from '../../components/Card';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container } from '../../styles/components';
// import api from '../../services/api';

function Result({ history }) {
  // const [values, setValues] = useState(initialState);
  // const expression = `${values.monthly}*(((1+0.00517)^${values.time *
  //   12}-1)/0.00517)`;

  useEffect(() => {
    async function loadResult() {
      // console.log(values);
      try {
        // const response = await api.get(`/?expr=${decodeURIComponent(data)}`);
        // console.log(values.name);
      } catch (err) {
        // console.log(err);
      }
    }

    loadResult();
  }, []);

  function handleBack() {
    history.push('/');
  }

  return (
    <Container>
      <Header />
      <Card>
        <p>
          Olá <strong>Tobias</strong>, <br /> juntando <strong>R$ 20,00</strong>{' '}
          todo mês, você terá <strong>R$ 509,65</strong> em{' '}
          <strong>2 anos</strong>.
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
