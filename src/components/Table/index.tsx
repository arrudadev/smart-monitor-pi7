import { Pagination } from '../Pagination';
import { Container, PaginationWrapper } from './styles';

export const Table = () => {
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
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>

          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>

          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>

          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>

          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>

          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>

      {/* <PaginationWrapper>
        <Pagination />
      </PaginationWrapper> */}
    </Container>
  );
};
