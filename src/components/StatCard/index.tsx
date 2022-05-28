import { ReactNode, useState } from 'react';

import { Modal } from '../Modal';
import { Container, InfoIcon, Title, Value } from './styles';

type StatCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  description: string;
};

export const StatCard = ({
  icon,
  title,
  value,
  description,
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
          onClose={() => setModalDisplayed(false)}
        />
      )}
    </>
  );
};
