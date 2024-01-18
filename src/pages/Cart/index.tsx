import { useCart } from '~/context/cart.context';
import { EmptyCart } from './components/EmptyCart';
import {
  Container,
  ContentProduct,
  ContentProductDetails,
  ContentProductTitle,
  Row,
  Section,
} from './styles';

export function Cart() {
  const { products } = useCart();

  const cartIsEmpty = products.length < 1;

  return (
    <>
      {!cartIsEmpty ? (
        <EmptyCart />
      ) : (
        <Container>
          <Section>
            <Row>
              <img src="https://wefit-react-web-test.s3.amazonaws.com/spider-man.png" alt="" />

              <ContentProduct>
                <ContentProductTitle>
                  <h3>Homem Aranha</h3>

                  <div>
                    <h4>R$ 29,99</h4>
                    <img src="/public/trash-icon.svg" alt="Remover produto" />
                  </div>
                </ContentProductTitle>

                <ContentProductDetails>
                  <div>
                    <img src="/public/minus-icon.svg" alt="diminuir quantidade" />
                    <input type="text" value="1" />
                    <img src="/public/plus-icon.svg" alt="aumentar quantidade" />
                  </div>

                  <div>
                    <h6>SUBTOTAL</h6>
                    <h5>R$ 29,99</h5>
                  </div>
                </ContentProductDetails>
              </ContentProduct>
            </Row>
          </Section>
        </Container>
      )}
    </>
  );
}
