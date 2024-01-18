import { useCart } from '~/context/cart.context';
import { CartContainer, Container } from './styles';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { products } = useCart();

  const navigate = useNavigate();

  return (
    <Container>
      <h1>WeMovies</h1>

      <CartContainer onClick={() => navigate('carrinho')}>
        <div>
          <h2>Meu Carrinho</h2>
          <span>{products.length} itens</span>
        </div>

        <img src="/public/cart.svg" alt="Meu carrinho" />
      </CartContainer>
    </Container>
  );
}
