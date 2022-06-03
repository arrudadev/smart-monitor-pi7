import { RiHeartPulseLine } from 'react-icons/ri';

import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 360px;
`;

export const Logo = styled(RiHeartPulseLine)`
  height: 62px;
  width: 62px;

  color: var(--primary);
`;

export const Headline = styled.h1`
  font-size: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 2rem;

  margin-top: 30px;

  border-radius: 8px;
  background-color: var(--background-light);
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;
