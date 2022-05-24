import { ReactNode } from 'react';

import { ActiveLink } from '../ActiveLink';
import { StyledNavItem } from './styles';

type NavItemProps = {
  text: string;
  icon?: ReactNode;
  href: string;
  shouldMatchExactHref?: boolean;
};

export const NavItem = ({
  text,
  icon,
  href,
  shouldMatchExactHref = false,
}: NavItemProps) => (
  <ActiveLink href={href} shouldMatchExactHref={shouldMatchExactHref} passHref>
    <StyledNavItem>
      <>
        {icon}

        <p>{text}</p>
      </>
    </StyledNavItem>
  </ActiveLink>
);
