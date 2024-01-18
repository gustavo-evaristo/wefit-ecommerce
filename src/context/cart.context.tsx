import { ReactNode, useContext, useState, createContext } from 'react';

interface CartContextProvider {
  children: ReactNode;
}

interface CartContextData {
  products: Product[];
  addProductToCart: (product: Product) => void;
}

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartContextProvider) {
  const [products, setProducts] = useState<Product[]>([]);

  function addProductToCart(product: Product) {
    const productAlreadyExists = products.find((state) => state.id === product.id);

    if (productAlreadyExists) {
      return;
    }

    return setProducts((state) => [product, ...state]);
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
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
