import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100%;

  border: none;

  margin: 1rem 0;
`;

export const Label = styled.label`
  display: flex;

  font-size: 1rem;
  font-weight: 500;

  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
`;

export const StyledInput = styled.input`
  height: 3.5rem;
  width: 100%;

  font-size: 1rem;
  font-weight: 400;

  color: var(--text);

  padding: 1rem;

  border: none;
  border-radius: 8px;

  background-color: var(--background);

  transition: all 0.2s;

  outline: 0;

  &:focus {
    border: 2px solid var(--primary);
  }
`;
