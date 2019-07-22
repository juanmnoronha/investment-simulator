import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  padding: 36px;
  width: 100%;

  @media (max-width: 480px) {
    justify-content: flex-start;
    border-radius: 0;
    box-shadow: none;
    flex: 1;
    padding: 36px;
  }

  h1 {
    color: #324b68;
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 16px;
    align-self: flex-start;

    @media (max-width: 480px) {
      margin-top: 16px;
    }
  }

  p {
    color: #333;
    font-size: 32px;
    margin-bottom: 36px;
    line-height: 48px;

    strong {
      color: #324b68;
      font-weight: 500;
    }
  }

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;

    input,
    select {
      background: transparent;
      border: 2px solid #324b68;
      border-radius: 4px;
      color: #324b68;
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 24px;
      padding: 24px;
      transition: ease 0.2s;
      width: 100%;
    }

    input::placeholder,
    select {
      color: #324b68;
    }

    select {
      -webkit-appearance: none;
      background: transparent;
    }
  }
`;
