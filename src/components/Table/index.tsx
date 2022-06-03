import { Stats } from '@prisma/client';

import { Pagination } from '../Pagination';
import { Container, PaginationWrapper } from './styles';

type TableProps = {
  rows: Stats[];
};

export const Table = ({ rows }: TableProps) => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Batimentos Cardiacos</th>
            <th>Spo2</th>
            <th>Temperatura Corporal</th>
            <th>Temperatura no Ambiente</th>
            <th>Umidade no Ambiente</th>
          </tr>
        </thead>

        <tbody>
          {rows?.map?.(row => (
            <tr key={row.id}>
              <td data-label="Batimentos Cardiacos">{row.heart_beats}</td>
              <td data-label="Spo2">{row.spo2}</td>
              <td data-label="Temperatura Corporal">{row.body_temperature}</td>
              <td data-label="Temperatura no Ambiente">
                {row.env_temperature}
              </td>
              <td data-label="Umidade no Ambiente">{row.env_humidity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <PaginationWrapper>
        <Pagination />
      </PaginationWrapper> */}
    </Container>
  );
};
