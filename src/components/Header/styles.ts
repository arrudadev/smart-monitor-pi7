import { FiMenu } from 'react-icons/fi';
import { RiHeartPulseLine } from 'react-icons/ri';

import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;

  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 1480px;

  padding: 1rem 0;

  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(RiHeartPulseLine)`
  height: 42px;
  width: 42px;

  color: var(--primary);
`;

export const AppName = styled.h1`
  font-size: 28px;
  font-weight: 600;

  margin-left: 1rem;

  @media (max-width: 350px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  @media (max-width: 560px) {
    display: none;
  }
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const UserEmail = styled.p`
  font-size: 14px;
  font-weight: 400;

  color: var(--text-secundary);
`;

export const MenuICon = styled(FiMenu)`
  height: 42px;
  width: 42px;

  margin-left: 1rem;

  /* @media (min-width: 530px) {
    display: none;
  } */
`;
