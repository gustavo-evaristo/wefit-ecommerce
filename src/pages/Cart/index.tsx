import { useCart } from '~/context/cart.context';
import { EmptyCart } from './components/EmptyCart';
import { Container } from './styles';

export function Cart() {
  const { products } = useCart();

  const cartIsEmpty = products.length < 1;

  return <Container>{cartIsEmpty ? <EmptyCart /> : <EmptyCart />}</Container>;
}
