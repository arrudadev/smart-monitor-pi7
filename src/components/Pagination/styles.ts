import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  div + div {
    margin-left: 1rem;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  height: 32px;
  width: 32px;

  border-radius: 8px;

  background: var(--background);

  color: var(--text-secundary);

  &.active {
    color: var(--text);
  }
`;
