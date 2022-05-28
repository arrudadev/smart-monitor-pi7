import { RiHeartPulseFill } from 'react-icons/ri';

import type { NextPage } from 'next';

import { Layout } from '../../components/Layout';
import { StatCard } from '../../components/StatCard';
import { Container, StatsGrid, Title } from './_styles.dashboard';

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
    </Container>
  </Layout>
);

export default Dashboard;
