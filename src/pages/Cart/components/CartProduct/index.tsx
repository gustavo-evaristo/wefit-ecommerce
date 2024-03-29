import { useCartStore } from '~/store/cart.store';
import { formatCurrency } from '~/utils/format-currency';
import { Container, Content, ContentTitle, Details } from './styles';

export function CartProduct({ id, image, title, price }: Product) {
  const [incrementProduct, reduceProduct, getProductSummary, handleProductAmount] = useCartStore(
    (state) => [
      state.incrementProduct,
      state.reduceProduct,
      state.getProductSummary,
      state.handleProductAmount,
    ],
  );

  const removeProduct = useCartStore((state) => state.removeProduct);

  const { amount, totalPrice } = getProductSummary(id);

  function handleChange(event) {
    if (+event.target.value < 1) {
      return;
    }

    handleProductAmount(id, +event.target.value);
  }

  return (
    <Container>
      <img src={image} alt={title} />

      <Content>
        <ContentTitle>
          <h3>{title}</h3>

          <div>
            <h4>{formatCurrency(price)}</h4>
            <img src="/trash-icon.svg" alt="Remover produto" onClick={() => removeProduct(id)} />
          </div>
        </ContentTitle>

        <Details>
          <div>
            <img
              src="/minus-icon.svg"
              alt="diminuir quantidade"
              onClick={() => reduceProduct(id)}
            />
            <input type="number" min={1} value={amount} onChange={handleChange} />
            <img
              src="/plus-icon.svg"
              alt="aumentar quantidade"
              onClick={() => incrementProduct(id)}
              onChange={handleChange}
            />
          </div>

          <div>
            <h6>SUBTOTAL</h6>
            <h5>{formatCurrency(totalPrice)}</h5>
            <img src="/trash-icon.svg" alt="Remover produto" onClick={() => removeProduct(id)} />
          </div>
        </Details>
      </Content>
    </Container>
  );
}
