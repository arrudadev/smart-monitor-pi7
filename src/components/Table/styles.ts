import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background-light);

  margin-top: 1rem;

  padding: 1rem;

  table {
    border: 1px solid rgba(150, 153, 176, 0.6);
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;

    @media screen and (max-width: 650px) {
      border: 0;
    }
  }

  table thead {
    @media screen and (max-width: 650px) {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }

  table tr {
    border: 1px solid rgba(150, 153, 176, 0.6);
    padding: 0.35em;

    @media screen and (max-width: 650px) {
      border-bottom: 3px solid rgba(150, 153, 176, 0.6);
      display: block;
      margin-bottom: 0.625em;
    }
  }

  table th,
  table td {
    padding: 0.625em;
    text-align: center;
  }

  table th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  table td {
    @media screen and (max-width: 650px) {
      border-bottom: 1px solid rgba(150, 153, 176, 0.6);
      display: block;
      font-size: 0.8em;
      text-align: right;

      &::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
      }

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 1rem 0;
`;

export const table = styled.div``;
