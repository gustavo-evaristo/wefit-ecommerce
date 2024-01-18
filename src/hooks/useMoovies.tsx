import { useQuery } from 'react-query';
import { api } from '~/services/axios';

interface Moovies {
  id: string;
  title: string;
  price: string;
  image: string;
}

async function findMoovies(): Promise<Moovies[]> {
  const { data } = await api.get('/products');

  return data;
}

export function useMoovies() {
  return useQuery('findMoovies', findMoovies);
}
