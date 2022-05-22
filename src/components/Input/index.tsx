import { Container, Label, StyledInput } from './styles';

type InputProps = {
  label: string;
};

export const Input = ({ label }: InputProps) => (
  <Container>
    <Label>{label}</Label>

    <StyledInput />
  </Container>
);
