import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 3rem 1rem;

  background-color: var(--background-light);

  border-radius: 8px;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;

  text-align: center;

  margin-top: 1rem;
`;

export const Value = styled.span`
  font-size: 22px;
  font-weight: 400;

  text-align: center;

  margin-top: 1rem;
`;
