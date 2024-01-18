export function formatCurrency(value: number) {
  if (!value) {
    return '';
  }

  return Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(value);
}
