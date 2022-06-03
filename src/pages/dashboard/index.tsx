import { useEffect, useState } from 'react';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { FaTable, FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { MdOutlineBloodtype } from 'react-icons/md';
import { RiHeartPulseFill } from 'react-icons/ri';
import { WiHumidity } from 'react-icons/wi';

import type { NextPage } from 'next';

import { Stats } from '@prisma/client';

import { BodyTemperatureChart } from '../../components/BodyTemperatureChart';
import { HeartBeatsChart } from '../../components/HeartBeatsChart';
import { Layout } from '../../components/Layout';
import { Spo2Chart } from '../../components/Spo2Chart';
import { StatCard } from '../../components/StatCard';
import { Table } from '../../components/Table';
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
  ReloadIcon,
  StatsGrid,
  Title,
  TitleWrapper,
} from '../../styles/pages/dashboard';

type ResponseData = {
  data: Stats[];
};

const Dashboard: NextPage = () => {
  const [stats, setStats] = useState<Stats[]>([]);
  // const [visualization, setVisualization] = useState('chart');

  async function fetchStats() {
    fetch('/api/stats')
      .then(response => response.json())
      .then((data: ResponseData) => setStats(data.data));
  }

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <Layout>
      <Container>
        <TitleWrapper>
          <Title>Dashboard</Title>

          <ReloadIcon onClick={fetchStats} />
        </TitleWrapper>

        <StatsGrid>
          <StatCard
            title="Batimentos Cardiacos"
            value={`${stats.length > 0 ? stats[0].heart_beats : '0'} bpm`}
            icon={<RiHeartPulseFill color="red" size={48} />}
            description="Em repouso, a frequência cardíaca normal apresenta uma variação entre 60 e 100 batimentos por minuto (bpm). A aceleração dos batimentos (acima de 100 bpm) indica que a pessoa está com taquicardia. Já uma frequência cardíaca baixa, inferior a 60 bpm, é considerada uma condição de bradicardia."
            referenceLink="https://conteudo.omronbrasil.com/batimentos-cardiacos-normais-por-idade/#:~:text=Em%20repouso%2C%20a%20frequ%C3%AAncia%20card%C3%ADaca,considerada%20uma%20condi%C3%A7%C3%A3o%20de%20bradicardia."
          />

          <StatCard
            title="Spo2"
            value={`${stats.length > 0 ? stats[0].spo2 : '0'} %`}
            icon={<MdOutlineBloodtype color="brown" size={48} />}
            description="A saturação do oxigênio é um parâmetro vital para definir o índice de oxigênio do sangue e a entrega do oxigênio. Para adultos, a escala normal do SpO2 é 95 – 100%. Um valor mais baixo de 90% é considerado a baixa saturação do oxigênio, que exige o suplemento externo do oxigênio."
            referenceLink="https://prolife.com.br/o-que-e-saturacao-de-oxigenio-e-qual-o-valor-minimo-do-spo2/#:~:text=A%20satura%C3%A7%C3%A3o%20do%20oxig%C3%AAnio%20%C3%A9,o%20suplemento%20externo%20do%20oxig%C3%AAnio."
          />

          <StatCard
            title="Temperatura Corporal"
            value={`${stats.length > 0 ? stats[0].body_temperature : '0'} º`}
            icon={<FaTemperatureHigh color="#963832" size={48} />}
            description="A temperatura corpórea considerada ideal varia entre 36º C e 36,7º C. Geralmente, ela é mais baixa pela manhã e mais alta no fim da tarde ou à noite. Alterações de até um grau podem ser absolutamente aceitáveis em condições normais. Nas mulheres, por exemplo, após a ovulação, durante o ciclo menstrual e no primeiro trimestre da gravidez, ocorre uma elevação natural da temperatura."
            referenceLink="https://drauziovarella.uol.com.br/doencas-e-sintomas/febre/#:~:text=A%20temperatura%20corp%C3%B3rea%20considerada%20ideal,absolutamente%20aceit%C3%A1veis%20em%20condi%C3%A7%C3%B5es%20normais."
          />

          <StatCard
            title="Temperatura no ambiente"
            value={`${stats.length > 0 ? stats[0].env_temperature : '0'} º`}
            icon={<FaTemperatureLow color="green" size={48} />}
            description="Segundo a NR17, do Ministério do Trabalho, a temperatura do ambiente de trabalho onde são executadas atividades intelectuais como nos laboratórios, escritórios, sala de desenvolvimento e projetos, deve ficar entre 20 e 23 graus centígrados"
            referenceLink="https://blog.frigelar.com.br/qual-temperatura-ideal-ambiente/"
          />

          <StatCard
            title="Umidade no ambiente"
            value={`${stats.length > 0 ? stats[0].env_humidity : '0'} %`}
            icon={<WiHumidity color="blue" size={72} />}
            description="Segundo NR17, do Ministério do Trabalho define, então, que a temperatura no ambiente de trabalho deve ser entre 20 e 23 graus celsius, enquanto a umidade relativa do ar não pode ser menor do que 40%."
            referenceLink="https://blog.climabrisa.com.br/por-que-controlar-a-umidade-do-ar-no-ambiente-de-trabalho/"
          />
        </StatsGrid>

        {/* <ChartTableHeader>
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
        </ChartTableHeader> */}

        {/* <ChartTableWrapper>
          {visualization === 'chart' && (
            <>
              <HeartBeatsChart />

              <Spo2Chart />

              <BodyTemperatureChart />

              <HeartBeatsChart />

              <HeartBeatsChart />
            </>
          )}

          {visualization === 'table' && <Table />}
        </ChartTableWrapper> */}

        <Table rows={stats} />
      </Container>
    </Layout>
  );
};

export default Dashboard;
