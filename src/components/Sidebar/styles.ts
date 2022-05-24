import styled from 'styled-components';

export const Aside = styled.aside`
  display: flex;

  @media (max-width: 530px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  > :not(:first-child) {
    margin-top: 1rem;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;

  text-transform: uppercase;

  color: var(--text-secundary);

  margin-bottom: 1rem;
`;

export const NavItemWrapper = styled.div`
  margin-left: 1rem;
`;
