import { Button } from '../Button';
import { ButtonContent, Card } from './styles';

interface Props {
  title: string;
  price: string;
  image: string;
}

export function MoovieCard({ title, price, image }: Props) {
  return (
    <Card>
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <span>R$ {price}</span>

      <Button>
        <ButtonContent>
          <img src="/public/add-to-cart-icon.svg" alt='"Adicionar ao carrinho' />
          <h6>0</h6>
        </ButtonContent>
        ADICIONAR AO CARRINHO
      </Button>
    </Card>
  );
}
