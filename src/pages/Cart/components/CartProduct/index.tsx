import { useCart } from '~/context/cart.context';
import { Container, Content, ContentTitle, Details } from './styles';

export function CartProduct({ id, image, title, price }: Product) {
  const { removeProduct, incrementProduct, reduceProduct, getProductSummary } = useCart();

  const { amount, totalPrice } = getProductSummary(id);

  return (
    <Container key={id}>
      <img src={image} alt={title} />

      <Content>
        <ContentTitle>
          <h3>{title}</h3>

          <div>
            <h4>R$ {price.toFixed(2)}</h4>
            <img
              src="/public/trash-icon.svg"
              alt="Remover produto"
              onClick={() => removeProduct(id)}
            />
          </div>
        </ContentTitle>

        <Details>
          <div>
            <img
              src="/public/minus-icon.svg"
              alt="diminuir quantidade"
              onClick={() => reduceProduct(id)}
            />
            <div>
              <span>{amount}</span>
            </div>
            <img
              src="/public/plus-icon.svg"
              alt="aumentar quantidade"
              onClick={() => incrementProduct(id)}
            />
          </div>

          <div>
            <h6>SUBTOTAL</h6>
            <h5>R$ {totalPrice.toFixed(2)}</h5>
          </div>
        </Details>
      </Content>
    </Container>
  );
}
