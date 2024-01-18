import { useNavigate } from 'react-router-dom';
import { useCartStore } from '~/store/cart.store';
import { formatCurrency } from '~/utils/format-currency';
import { CartProduct } from './components/CartProduct';
import { EmptyCart } from './components/EmptyCart';
import { ButtonStyled, Container, ProductHeader, Products, Section, Summary } from './styles';

export function Cart() {
  const [products, getTotalCartPrice, clearCart] = useCartStore((state) => [
    state.products,
    state.getTotalCartPrice,
    state.clearCart,
  ]);

  const totalCartPrice = getTotalCartPrice();

  const cartIsEmpty = products.length < 1;

  const navigate = useNavigate();

  function checkout() {
    clearCart();
    return navigate('/compra-realizada');
  }

  return (
    <>
      {cartIsEmpty ? (
        <EmptyCart />
      ) : (
        <Container>
          <Section>
            <Products>
              <ProductHeader>
                <h6>PRODUTO</h6>
                <h6>QTD</h6>
                <h6>SUBTOTAL</h6>
              </ProductHeader>

              {products.map((product) => (
                <CartProduct {...product} key={product.id} />
              ))}
            </Products>

            <Summary>
              <div>
                <h6>TOTAL</h6>
                <h5>{formatCurrency(totalCartPrice)}</h5>
              </div>

              <ButtonStyled onClick={checkout}>FINALIZAR PEDIDO</ButtonStyled>
            </Summary>
          </Section>
        </Container>
      )}
    </>
  );
}
