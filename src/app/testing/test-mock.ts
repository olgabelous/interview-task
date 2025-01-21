import { Tariff } from '../models/tariff';

export const MOCK_TARIFFS: Tariff[] = [
  {
    id: 1,
    tariffName: 'Tariff 1',
    download: 50,
    upload: 10,
    price: 100,
    benefits: ['Benefit 1', 'Benefit 2'],
  },
  {
    id: 2,
    tariffName: 'Tariff 2',
    download: 100,
    upload: 20,
    price: 200,
    benefits: ['Benefit A', 'Benefit B'],
  },
  {
    id: 3,
    tariffName: 'Tariff 3',
    download: 75,
    upload: 15,
    price: 150,
    benefits: ['Benefit 3', 'Benefit 4', 'Benefit 5'],
  },
];
