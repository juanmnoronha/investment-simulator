import styled from 'styled-components';

import { Container } from '../../styles/components';

export const StyledContainer = styled(Container)`
  h1,
  form {
    max-width: 600px;
    width: 100%;
  }

  h1 {
    color: #324b68;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 16px;
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;

  input,
  select,
  button {
    font-size: 16px;
  }

  input,
  select {
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 24px;
    padding: 24px;
    width: 100%;
  }

  input::placeholder,
  select {
    color: #bbb;
  }

  select {
    -webkit-appearance: none;
    background: #fff;
  }

  button {
    background: #834ee4;
    border-radius: 48px;
    border: none;
    color: #fff;
    font-weight: 500;
    height: 60px;
    text-transform: uppercase;
    width: 400px;
  }
`;
