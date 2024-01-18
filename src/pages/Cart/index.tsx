import { useNavigate } from 'react-router-dom';
import { useCart } from '~/context/cart.context';
import { CartProduct } from './components/CartProduct';
import { EmptyCart } from './components/EmptyCart';
import { ButtonStyled, Container, Products, Section, Summary } from './styles';

export function Cart() {
  const { products, getTotalCartPrice } = useCart();

  const totalCartPrice = getTotalCartPrice();

  const cartIsEmpty = products.length < 1;

  const navigate = useNavigate();

  return (
    <>
      {cartIsEmpty ? (
        <EmptyCart />
      ) : (
        <Container>
          <Section>
            <Products>
              {products.map((product) => (
                <CartProduct {...product} />
              ))}
            </Products>

            <Summary>
              <div>
                <h6>TOTAL</h6>
                <h5>R$ {totalCartPrice.toFixed(2)}</h5>
              </div>

              <ButtonStyled onClick={() => navigate('/compra-realizada')}>
                FINALIZAR PEDIDO
              </ButtonStyled>
            </Summary>
          </Section>
        </Container>
      )}
    </>
  );
}
