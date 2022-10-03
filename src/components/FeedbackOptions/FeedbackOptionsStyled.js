import styled from 'styled-components';

export const Controls = styled.ul`
  list-style: none;
  display: flex;
  gap: 12px;
  padding: 0;
`;

export const Btn = styled.button`
  padding: 8px;
  border-radius: 6px;
  text-transform: capitalize;
  border: none;
  background-color: #a0cec2;

  :hover,
  :focus {
    background-color: #606467;
    color: azure;
  }
`;
