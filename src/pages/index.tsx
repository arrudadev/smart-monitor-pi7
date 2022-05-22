import type { NextPage } from 'next';

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import {
  ButtonWrapper,
  Container,
  Form,
  Headline,
  Logo,
  Main,
} from './_styles.login';

const Login: NextPage = () => (
  <Main>
    <Container>
      <Logo />

      <Headline>Smart Monitor</Headline>

      <Form>
        <Input label="E-mail" />

        <Input label="Senha" />

        <ButtonWrapper>
          <Button>Entrar</Button>
        </ButtonWrapper>
      </Form>
    </Container>
  </Main>
);

export default Login;
