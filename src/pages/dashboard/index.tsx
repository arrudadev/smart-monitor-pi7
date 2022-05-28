import { AiOutlineAreaChart } from 'react-icons/ai';
import { FaTable } from 'react-icons/fa';
import { RiHeartPulseFill } from 'react-icons/ri';

import type { NextPage } from 'next';

import { Layout } from '../../components/Layout';
import { StatCard } from '../../components/StatCard';
import {
  ChartTableHeader,
  ChartTableItem,
  ChartTableToogle,
  ChartTableToogleTitle,
  ChartTableToogleWrapper,
  Container,
  Filter,
  FilterItem,
  FilterTitle,
  FilterWrapper,
  StatsGrid,
  Title,
} from './_styles.dashboard';

const Dashboard: NextPage = () => (
  <Layout>
    <Container>
      <Title>Dashboard</Title>

      <StatsGrid>
        <StatCard
          title="Batimentos Cardiacos"
          value="89"
          icon={<RiHeartPulseFill color="red" size={48} />}
        />

        <StatCard
          title="Spo2"
          value="89"
          icon={<RiHeartPulseFill color="red" size={48} />}
        />

        <StatCard
          title="Temperatura Corporal"
          value="89"
          icon={<RiHeartPulseFill color="red" size={48} />}
        />

        <StatCard
          title="Temperatura no ambiente"
          value="89"
          icon={<RiHeartPulseFill color="red" size={48} />}
        />

        <StatCard
          title="Umidade no ambiente"
          value="89"
          icon={<RiHeartPulseFill color="red" size={48} />}
        />
      </StatsGrid>

      <ChartTableHeader>
        <ChartTableToogleWrapper>
          <ChartTableToogleTitle>Visualização</ChartTableToogleTitle>

          <ChartTableToogle>
            <ChartTableItem className="active">
              <AiOutlineAreaChart size={24} />
            </ChartTableItem>

            <ChartTableItem>
              <FaTable size={24} />
            </ChartTableItem>
          </ChartTableToogle>
        </ChartTableToogleWrapper>

        <FilterWrapper>
          <FilterTitle>Filtros</FilterTitle>

          <Filter>
            <FilterItem className="active">30</FilterItem>

            <FilterItem>15</FilterItem>

            <FilterItem>7</FilterItem>

            <FilterItem>3</FilterItem>
          </Filter>
        </FilterWrapper>
      </ChartTableHeader>
    </Container>
  </Layout>
);

export default Dashboard;
