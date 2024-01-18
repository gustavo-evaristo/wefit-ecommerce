import { useCartStore } from '~/store/cart.store';
import { formatCurrency } from '~/utils/format-currency';
import { ButtonStyled, Card } from './styles';

export function ProductCard(product: Product) {
  const [products, addProductToCart] = useCartStore((state) => [
    state.products,
    state.addProductToCart,
  ]);

  const amountProductsInCart = products.filter((state) => state.id === product.id).length;

  const $isSelected = amountProductsInCart > 0;

  return (
    <Card>
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <span>{formatCurrency(product.price)}</span>

      <ButtonStyled onClick={() => addProductToCart(product)} $isSelected={$isSelected}>
        <div>
          <img src="/public/add-to-cart-icon.svg" alt='"Adicionar ao carrinho' />
          <h6>{amountProductsInCart}</h6>
        </div>

        {$isSelected ? 'ITEM ADICIONADO' : ' ADICIONAR AO CARRINHO'}
      </ButtonStyled>
    </Card>
  );
}
