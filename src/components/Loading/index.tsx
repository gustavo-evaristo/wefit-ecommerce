import ReactLoading from 'react-loading';
import { theme } from '~/styles/theme';

interface Props {
  variant: 'small' | 'large';
}

export function Loading({ variant = 'small' }: Props) {
  const width = {
    small: 24,
    large: 60,
  };

  const height = {
    small: 24,
    large: 60,
  };

  return (
    <ReactLoading
      type="spin"
      color={theme['high-pure']}
      width={width[variant]}
      height={height[variant]}
    />
  );
}
