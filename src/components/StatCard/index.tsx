import { ReactNode } from 'react';

import { Container, InfoIcon, Title, Value } from './styles';

type StatCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
};

export const StatCard = ({ icon, title, value }: StatCardProps) => (
  <Container>
    {icon}

    <InfoIcon />

    <Title>{title}</Title>

    <Value>{value}</Value>
  </Container>
);
