import { Loading } from '~/components/Loading';
import { ProductCard } from '~/components/ProductCard';
import { useProducts } from '~/hooks/useProducts';
import { Container, LoadingContent } from './styles';

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
