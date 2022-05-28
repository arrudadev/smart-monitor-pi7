import {
  CloseButton,
  Container,
  Description,
  Footer,
  Header,
  Overlay,
  Title,
} from './styles';

type ModalProps = {
  title: string;
  description: string;
  onClose: () => void;
};

export const Modal = ({ title, description, onClose }: ModalProps) => {
  return (
    <>
      <Overlay />

      <Container>
        <Header>
          <Title>{title}</Title>
        </Header>

        <Description>{description}</Description>

        <Footer>
          <CloseButton onClick={onClose}>Fechar</CloseButton>
        </Footer>
      </Container>
    </>
  );
};
