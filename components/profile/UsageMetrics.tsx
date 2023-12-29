'use client';

import {
  Card,
  DonutChart,
  Title,
  BarList,
  Bold,
  Flex,
  Tracker,
  Text
} from '@tremor/react';

const UsageMetrics = () => {
  return (
    <div className="w-full md:w-[60%] rounded-md flex flex-col md:flex-row justify-center gap-4 m-auto bg-gray-500 p-6">
      <Card className="max-w-lg">
        <Title>Tool Usages</Title>
        <DonutChart
          className="mt-6"
          data={usages}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={['rose', 'cyan', 'amber']}
        />
      </Card>
      <Card className="max-w-lg">
        <Title>Reseach Papers</Title>
        <Flex className="mt-4">
          <Text>
            <Bold>Source</Bold>
          </Text>
          <Text>
            <Bold>Visits</Bold>
          </Text>
        </Flex>
        <BarList data={researchPapers} className="mt-2" />
      </Card>
      <Card className="max-w-sm mx-auto">
        <Title>Status</Title>
        <Text>Our Research Server &bull; Jan 2024</Text>
        <Flex justifyContent="end" className="mt-4">
          <Text>Uptime 92%</Text>
        </Flex>
        <Tracker data={data} className="mt-2" />
      </Card>
    </div>
  );
};

export default UsageMetrics;

interface Tracker {
  color?:
    | 'emerald'
    | 'rose'
    | 'gray'
    | 'yellow'
    | 'slate'
    | 'zinc'
    | 'neutral'
    | 'stone'
    | 'red'
    | 'orange'
    | 'amber'
    | 'lime'
    | 'green'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink';
  tooltip: string;
}
const data: Tracker[] = [
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'rose', tooltip: 'Downtime' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'gray', tooltip: 'Maintenance' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'yellow', tooltip: 'Degraded' },
  { color: 'emerald', tooltip: 'Operational' }
];

const researchPapers = [
  {
    name: 'Advances in Reinforcement Learning',
    value: 56
  },
  {
    name: 'Deep Learning for Computer Vision',
    value: 51
  },
  {
    name: 'Natural Language Processing with Transformers',
    value: 71
  }
];

const usages = [
  {
    name: 'MIT Research',
    sales: 98
  },
  {
    name: 'Research Paper Summary',
    sales: 47
  },
  {
    name: 'Brainstrom Research',
    sales: 8
  }
];

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat('us').format(number).toString()}`;
