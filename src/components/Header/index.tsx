import { useCart } from '~/context/cart.context';
import { CartContainer, Container } from './styles';

export function Header() {
  const { products } = useCart();

  return (
    <Container>
      <h1>WeMovies</h1>

      <CartContainer>
        <div>
          <h2>Meu Carrinho</h2>
          <span>{products.length} itens</span>
        </div>

        <img src="/public/cart.svg" alt="Meu carrinho" />
      </CartContainer>
    </Container>
  );
}
