import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 100;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  left: 1rem;
  right: 1rem;

  z-index: 101;

  padding: 3rem;

  background-color: var(--background-light);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;

  margin-top: 1rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 600;

  color: var(--text);

  height: 48px;

  padding: 1rem;

  border-radius: 8px;
  border: none;

  background-color: var(--background);
`;
