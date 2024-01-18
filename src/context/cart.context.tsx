import { ReactNode, useContext, useState, createContext, Dispatch, SetStateAction } from 'react';

interface CartContextProvider {
  children: ReactNode;
}

interface CartContextData {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
}

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartContextProvider) {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
