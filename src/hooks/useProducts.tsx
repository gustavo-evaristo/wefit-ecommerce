import { useQuery } from 'react-query';
import { api } from '~/services/axios';

async function findProducts(): Promise<Product[]> {
  const { data } = await api.get('/products');

  return data;
}

export function useProducts() {
  return useQuery('findProducts', findProducts);
}
