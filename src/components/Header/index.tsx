import { CartContainer, Container } from './styles';

export function Header() {
  return (
    <Container>
      <h1>WeMovies</h1>

      <CartContainer>
        <div>
          <h2>Meu Carrinho</h2>
          <span>0 itens</span>
        </div>

        <img src="/public/cart.svg" alt="Meu carrinho" />
      </CartContainer>
    </Container>
  );
}
