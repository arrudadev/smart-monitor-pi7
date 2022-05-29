import {
  CloseButton,
  Container,
  Description,
  Footer,
  Header,
  Overlay,
  Title,
  ToLearnAbout,
} from './styles';

type ModalProps = {
  title: string;
  description: string;
  referenceLink: string;
  onClose: () => void;
};

export const Modal = ({
  title,
  description,
  referenceLink,
  onClose,
}: ModalProps) => {
  return (
    <>
      <Overlay />

      <Container>
        <Header>
          <Title>{title}</Title>
        </Header>

        <Description>{description}</Description>

        <ToLearnAbout>
          Para saber mais veja{' '}
          <a href={referenceLink} target="_blank" rel="noreferrer">
            aqui
          </a>
        </ToLearnAbout>

        <Footer>
          <CloseButton onClick={onClose}>Fechar</CloseButton>
        </Footer>
      </Container>
    </>
  );
};
