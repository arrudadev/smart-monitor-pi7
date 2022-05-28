import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background-light);

  margin-top: 1rem;

  padding: 1rem;
`;

export const StyledTable = styled.table`
  width: 100%;

  th {
    font-weight: 600;

    text-align: center;

    padding: 1rem;

    border-bottom: 1px solid rgba(150, 153, 176, 0.6);
  }

  td {
    font-weight: 400;

    border-bottom: 1px solid rgba(150, 153, 176, 0.6);

    text-align: center;

    padding: 1rem;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 1rem 0;
`;
