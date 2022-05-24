import { AiOutlineUser } from 'react-icons/ai';
import { RiDashboardLine } from 'react-icons/ri';

import { NavItem } from '../NavItem';
import {
  AppName,
  CloseButton,
  Container,
  Logo,
  LogoWrapper,
  Nav,
  Overlay,
  Profile,
  StyledDrawer,
  UserEmail,
  UserName,
} from './styles';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Drawer = ({ isOpen, onClose }: DrawerProps) => (
  <>
    <Overlay isOpen={isOpen} />

    <StyledDrawer isOpen={isOpen}>
      <Container>
        <LogoWrapper>
          <Logo />

          <AppName>Smart Monitor</AppName>

          <CloseButton onClick={onClose} />
        </LogoWrapper>

        <Profile>
          <UserName>Alexandre Monteiro</UserName>

          <UserEmail>alexandre.monteiro.bec@gmail.com</UserEmail>
        </Profile>

        <Nav>
          <NavItem
            href="/dashboard"
            text="Dashboard"
            icon={<RiDashboardLine />}
            shouldMatchExactHref
          />

          <NavItem
            href="/profile"
            text="Perfil"
            icon={<AiOutlineUser />}
            shouldMatchExactHref
          />
        </Nav>
      </Container>
    </StyledDrawer>
  </>
);
