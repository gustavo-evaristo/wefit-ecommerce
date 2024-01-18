import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '~/pages/Home';
import { Cart } from '~/pages/Cart';
import { OrderConfirmed } from '~/pages/OrderConfirmed';
import { DefaultLayout } from '~/layouts/DefaultLayout';

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
