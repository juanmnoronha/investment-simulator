import styled from 'styled-components';

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 24px;

  @media (max-width: 480px) {
    padding: 0;
  }
`;
