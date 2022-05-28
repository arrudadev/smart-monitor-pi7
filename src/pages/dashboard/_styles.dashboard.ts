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

export const ChartTableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
`;

export const ChartTableToogleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChartTableToogleTitle = styled.span`
  font-size: 18px;
  font-weight: 500;

  margin-bottom: 1rem;
`;

export const ChartTableToogle = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid var(--text-secundary);
  border-radius: 8px;

  > :first-child {
    border-right: 1px solid var(--text-secundary);
  }
`;

export const ChartTableItem = styled.div`
  padding: 1rem;

  cursor: pointer;

  color: var(--text-secundary);

  &.active > svg {
    color: var(--text);
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterTitle = styled.div`
  font-size: 18px;
  font-weight: 500;

  margin-bottom: 1rem;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid var(--text-secundary);
  border-radius: 8px;

  div + div {
    border-left: 1px solid var(--text-secundary);
  }
`;

export const FilterItem = styled.div`
  font-size: 18px;

  padding: 1rem;

  cursor: pointer;

  color: var(--text-secundary);

  &.active {
    color: var(--text);
  }
`;

export const ChartTableWrapper = styled.div`
  margin-bottom: 3rem;
`;
