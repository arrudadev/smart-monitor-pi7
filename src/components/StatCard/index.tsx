import { ReactNode, useState } from 'react';

import { Modal } from '../Modal';
import { Container, InfoIcon, Title, Value } from './styles';

type StatCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  description: string;
  referenceLink: string;
};

export const StatCard = ({
  icon,
  title,
  value,
  description,
  referenceLink,
}: StatCardProps) => {
  const [modalDisplayed, setModalDisplayed] = useState(false);

  return (
    <>
      <Container>
        {icon}

        <InfoIcon onClick={() => setModalDisplayed(true)} />

        <Title>{title}</Title>

        <Value>{value}</Value>
      </Container>

      {modalDisplayed && (
        <Modal
          title={title}
          description={description}
          referenceLink={referenceLink}
          onClose={() => setModalDisplayed(false)}
        />
      )}
    </>
  );
};
