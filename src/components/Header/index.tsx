import { useNavigate } from 'react-router-dom';
import { useCartStore } from '~/store/cart.store';
import { CartContainer, Container } from './styles';

export function Header() {
  const amountProductsInCart = useCartStore((state) => state.products).length;

  const navigate = useNavigate();

  return (
    <Container>
      <h1 onClick={() => navigate('/')}>WeMovies</h1>

      <CartContainer onClick={() => navigate('carrinho')}>
        <div>
          <h2>Meu Carrinho</h2>
          <span>{`${amountProductsInCart} ${amountProductsInCart === 1 ? 'item' : 'itens'}`}</span>
        </div>

        <img src="/cart.svg" alt="Meu carrinho" />
      </CartContainer>
    </Container>
  );
}
