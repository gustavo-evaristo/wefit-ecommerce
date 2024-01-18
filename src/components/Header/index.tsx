import { useNavigate } from 'react-router-dom';
import { useCart } from '~/context/cart.context';
import { CartContainer, Container } from './styles';

export function Header() {
  const { products } = useCart();

  const amountProducts = products.length;

  const navigate = useNavigate();

  return (
    <Container>
      <h1>WeMovies</h1>

      <CartContainer onClick={() => navigate('carrinho')}>
        <div>
          <h2>Meu Carrinho</h2>
          <span>{`${amountProducts} ${amountProducts === 1 ? 'item' : 'itens'}`}</span>
        </div>

        <img src="/public/cart.svg" alt="Meu carrinho" />
      </CartContainer>
    </Container>
  );
}
