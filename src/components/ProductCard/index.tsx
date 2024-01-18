import { useCart } from '~/context/cart.context';
import { ButtonStyled, Card } from './styles';

export function ProductCard(product: Product) {
  const { addProductToCart, products } = useCart();

  const amountProductsInCart = products.filter((state) => state.id === product.id).length;

  const isSelected = amountProductsInCart > 0;

  return (
    <Card>
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <span>R$ {product.price.toFixed(2)}</span>

      <ButtonStyled onClick={() => addProductToCart(product)} isSelected={isSelected}>
        <div>
          <img src="/public/add-to-cart-icon.svg" alt='"Adicionar ao carrinho' />
          <h6>{amountProductsInCart}</h6>
        </div>

        {isSelected ? 'ITEM ADICIONADO' : ' ADICIONAR AO CARRINHO'}
      </ButtonStyled>
    </Card>
  );
}
