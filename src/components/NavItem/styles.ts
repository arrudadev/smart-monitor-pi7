import styled from 'styled-components';

type NavItemProps = {
  isActive?: boolean;
};

export const StyledNavItem = styled.a<NavItemProps>`
  display: flex;
  align-items: center;

  svg {
    height: 22px;
    width: 22px;

    margin-right: 0.5rem;

    color: ${({ isActive }) => (isActive ? 'var(--primary)' : 'var(--text)')};
  }

  p {
    font-size: 22px;
    font-weight: 600;

    color: ${({ isActive }) => (isActive ? 'var(--primary)' : 'var(--text)')};
  }
`;
