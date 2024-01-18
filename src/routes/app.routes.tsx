import { Routes, Route } from 'react-router-dom';
import { Home } from '~/pages/Home';
import { Cart } from '~/pages/Cart';
import { OrderConfirmation } from '~/pages/OrderConfirmation';
import { DefaultLayout } from '~/layouts/DefaultLayout';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/compra-realizada" element={<OrderConfirmation />} />
      </Route>
    </Routes>
  );
}
