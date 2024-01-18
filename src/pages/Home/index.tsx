import { MoovieCard } from '~/components/MoovieCard';
import { Container, LoadingContent } from './styles';
import { useMoovies } from '~/hooks/useMoovies';
import { Loading } from '~/components/Loading';

export function Home() {
  const { isFetching, data } = useMoovies();

  return (
    <Container>
      {isFetching ? (
        <LoadingContent>
          <Loading variant="large" />
        </LoadingContent>
      ) : (
        <>
          {data?.map((moovie) => (
            <MoovieCard {...moovie} key={moovie.id} />
          ))}
        </>
      )}
    </Container>
  );
}
