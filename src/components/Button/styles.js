import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.button.attrs(props => ({
  disabled: props.loading,
}))`
  align-items: center;
  background: #6a4abe;
  border-radius: 8px;
  border: none;
  color: #fff;
  display: flex;
  font-size: 20px;
  font-weight: 500;
  height: 64px;
  justify-content: center;
  text-transform: uppercase;
  transition: ease 0.2s;
  width: 100%;

  &:hover {
    background: #001834;
  }

  &[disabled] {
    cursor: not-allowed;
    background: red;
  }

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
