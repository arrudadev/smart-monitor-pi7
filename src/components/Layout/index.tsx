import { ReactNode } from 'react';

import { Header } from '../Header';
// import { Sidebar } from '../Sidebar';
import { Container, Content, Section, Main } from './styles';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <Main>
    <Container>
      <Header />

      <Section>
        {/* <Sidebar /> */}

        <Content>{children}</Content>
      </Section>
    </Container>
  </Main>
);
