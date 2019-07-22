import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Card from '../../components/Card';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container } from '../../styles/components';

function Result({ history }) {
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
