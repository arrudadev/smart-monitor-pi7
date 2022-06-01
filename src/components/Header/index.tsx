import { useState } from 'react';

import { Drawer } from '../Drawer';
import {
  AppName,
  Container,
  Logo,
  LogoWrapper,
  ReloadIcon,
  // MenuICon,
  // MenuWrapper,
  // Profile,
  StyledHeader,
  // UserEmail,
  // UserName,
  Wrapper,
} from './styles';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledHeader>
        <Container>
          <Wrapper>
            <LogoWrapper>
              <Logo />

              <AppName>Smart Monitor</AppName>
            </LogoWrapper>

            {/* <MenuWrapper>
              <Profile>
                <UserName>Alexandre Monteiro</UserName>

                <UserEmail>alexandre.monteiro.bec@gmail.com</UserEmail>
              </Profile>

              <MenuICon onClick={handleToggleDrawer} />
            </MenuWrapper> */}

            {/* <ReloadIcon /> */}
          </Wrapper>
        </Container>
      </StyledHeader>

      <Drawer isOpen={isOpen} onClose={handleToggleDrawer} />
    </>
  );
};
