import { Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '~/layouts/DefaultLayout';
import { Cart } from '~/pages/Cart';
import { Home } from '~/pages/Home';
import { OrderConfirmed } from '~/pages/OrderConfirmed';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/compra-realizada" element={<OrderConfirmed />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
