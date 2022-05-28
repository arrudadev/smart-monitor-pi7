import dynamic from 'next/dynamic';

import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type AreaChartProps = {
  series: {
    name: string;
    data: any[];
  }[];
  categories: string[];
};

export const AreaChart = ({ series, categories }: AreaChartProps) => {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: 'var(--text)',
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: 'var(--text-secundary)',
      },
      axisTicks: {
        color: 'var(--text-secundary)',
      },
      categories,
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };

  return <Chart options={options} series={series} type="area" height={300} />;
};
