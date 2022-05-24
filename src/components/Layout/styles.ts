import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1480px;

  padding: 0 1rem;

  margin: 0 auto;
`;

export const Section = styled.section`
  display: flex;

  width: 100%;

  margin-top: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;

  @media (min-width: 530px) {
    padding-left: 3rem;
  }
`;
