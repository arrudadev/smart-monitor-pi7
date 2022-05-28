import { AreaChart } from '../AreaChart';
import { Container, Title } from './styles';

export const Spo2Chart = () => {
  const categories = [
    '2021-11-10T10:00:00.000z',
    '2021-11-11T11:00:00.000z',
    '2021-11-12T12:00:00.000z',
    '2021-11-13T13:00:00.000z',
    '2021-11-14T14:00:00.000z',
  ];

  const series = [
    {
      name: 'teste',
      data: [1, 2, 3, 4, 5],
    },
  ];

  return (
    <Container>
      <Title>Média de Oxigenação no sangue por dia</Title>

      <AreaChart categories={categories} series={series} />
    </Container>
  );
};
