import { AiOutlineUser } from 'react-icons/ai';
import { RiDashboardLine } from 'react-icons/ri';

import { NavItem } from '../NavItem';
import { Aside, Nav, NavItemWrapper, Title } from './styles';

export const Sidebar = () => (
  <Aside>
    <Nav>
      <Title>Menu</Title>

      <NavItemWrapper>
        <NavItem
          href="/dashboard"
          text="Dashboard"
          icon={<RiDashboardLine />}
          shouldMatchExactHref
        />
      </NavItemWrapper>

      <NavItemWrapper>
        <NavItem
          href="/profile"
          text="Perfil"
          icon={<AiOutlineUser />}
          shouldMatchExactHref
        />
      </NavItemWrapper>
    </Nav>
  </Aside>
);
