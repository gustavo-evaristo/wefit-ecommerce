import { Container, LoadingContent } from './styles';
import { useProducts } from '~/hooks/useProducts';
import { Loading } from '~/components/Loading';
import { ProductCard } from '~/components/ProductCard';

export function Home() {
  const { isFetching, data } = useProducts();

  return (
    <Container>
      {isFetching ? (
        <LoadingContent>
          <Loading variant="large" />
        </LoadingContent>
      ) : (
        <>
          {data?.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </>
      )}
    </Container>
  );
}
