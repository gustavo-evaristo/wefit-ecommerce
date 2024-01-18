import { Button } from '~/components/Button';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

export function OrderConfirmed() {
  const navigate = useNavigate();

  return (
    <Container>
      <h3>Compra realizada com sucesso!</h3>

      <img src="/public/order-confirmed.svg" alt="Compra realizada com sucesso" />

      <Button onClick={() => navigate('/')}>VOLTAR</Button>
    </Container>
  );
}
