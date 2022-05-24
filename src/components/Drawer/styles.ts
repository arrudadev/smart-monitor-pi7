import { MdOutlineClose } from 'react-icons/md';
import { RiHeartPulseLine } from 'react-icons/ri';

import styled from 'styled-components';

type DrawerProps = {
  isOpen: boolean;
};

export const Overlay = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 100;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);

  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const StyledDrawer = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: auto;
  bottom: 0;

  z-index: 200;

  width: 260px;

  transform: ${({ isOpen }) => (isOpen ? 'none' : 'translateX(+100%)')};
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  border: none;
  background-color: var(--background-light);

  overflow-y: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1em;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Logo = styled(RiHeartPulseLine)`
  height: 32px;
  width: 32px;

  color: var(--primary);
`;

export const AppName = styled.h1`
  font-size: 20px;
  font-weight: 600;

  margin-left: 0.5rem;
`;

export const CloseButton = styled(MdOutlineClose)`
  height: 28px;
  width: 28px;

  margin-left: 1rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  margin-top: 1rem;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const UserEmail = styled.p`
  font-size: 14px;
  font-weight: 400;

  margin-top: 0.5rem;

  color: var(--text-secundary);
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: 1rem;

  > :not(:first-child) {
    margin-top: 1rem;
  }
`;
