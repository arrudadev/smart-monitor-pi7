import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 12px;

  width: 100%;

  margin-top: 1rem;
`;
