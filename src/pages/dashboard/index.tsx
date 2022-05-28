import { useState } from 'react';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { FaTable } from 'react-icons/fa';
import { RiH1, RiHeartPulseFill } from 'react-icons/ri';

import type { NextPage } from 'next';

import { BodyTemperatureChart } from '../../components/BodyTemperatureChart';
import { HeartBeatsChart } from '../../components/HeartBeatsChart';
import { Layout } from '../../components/Layout';
import { Spo2Chart } from '../../components/Spo2Chart';
import { StatCard } from '../../components/StatCard';
import {
  ChartTableHeader,
  ChartTableItem,
  ChartTableToogle,
  ChartTableToogleTitle,
  ChartTableToogleWrapper,
  ChartTableWrapper,
  Container,
  Filter,
  FilterItem,
  FilterTitle,
  FilterWrapper,
  StatsGrid,
  Title,
} from './_styles.dashboard';

const Dashboard: NextPage = () => {
  const [visualization, setVisualization] = useState('chart');

  return (
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
              <ChartTableItem
                className={`${visualization === 'chart' ? 'active' : ''}`}
                onClick={() => setVisualization('chart')}
              >
                <AiOutlineAreaChart size={24} />
              </ChartTableItem>

              <ChartTableItem
                className={`${visualization === 'table' ? 'active' : ''}`}
                onClick={() => setVisualization('table')}
              >
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

        {visualization === 'chart' && (
          <ChartTableWrapper>
            <HeartBeatsChart />

            <Spo2Chart />

            <BodyTemperatureChart />

            <HeartBeatsChart />

            <HeartBeatsChart />
          </ChartTableWrapper>
        )}

        {visualization === 'table' && <h1>table</h1>}
      </Container>
    </Layout>
  );
};

export default Dashboard;
