import { Button } from '~/components/Button';
import { Container } from './styles';
import { useCart } from '~/context/cart.context';
import { useNavigate } from 'react-router-dom';

export function Cart() {
  const navigate = useNavigate();

  const { products } = useCart();

  const cartIsEmpty = products.length < 1;

  function EmptyCart() {
    return (
      <>
        <h3>Parece que não há nada por aqui :(</h3>

        <img src="/public/empty.svg" alt="Sem produtos no carrinho" />

        <Button onClick={() => navigate(-1)}>VOLTAR</Button>
      </>
    );
  }

  return <Container>{cartIsEmpty ? <EmptyCart /> : <EmptyCart />}</Container>;
}
