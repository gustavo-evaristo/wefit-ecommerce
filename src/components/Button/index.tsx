import { Container } from './styles';

export function Button({ children, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
  return <Container {...props}>{children}</Container>;
}
