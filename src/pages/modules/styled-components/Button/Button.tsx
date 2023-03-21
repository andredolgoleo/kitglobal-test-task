import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }

  &:focus {
    outline: none;
  }
`;
