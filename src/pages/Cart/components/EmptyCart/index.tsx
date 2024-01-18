import { useNavigate } from 'react-router-dom';
import { Button } from '~/components/Button';
import { Container, Separator } from './styles';

export function EmptyCart() {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <h3>Parece que não há nada por aqui :(</h3>

        <img src="/public/empty.svg" alt="Sem produtos no carrinho" />
      </div>

      <Separator />

      <Button onClick={() => navigate(-1)}>VOLTAR</Button>
    </Container>
  );
}