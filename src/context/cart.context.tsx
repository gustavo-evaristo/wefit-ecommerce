import { ReactNode, createContext, useContext, useState } from 'react';

interface CartContextProvider {
  children: ReactNode;
}

interface ProductSummary {
  amount: number;
  totalPrice: number;
}

interface CartContextData {
  products: Product[];
  addProductToCart: (product: Product) => void;
  removeProduct: (id: string) => void;
  incrementProduct: (id: string) => void;
  reduceProduct: (id: string) => void;
  getProductSummary: (id: string) => ProductSummary;
  getTotalCartPrice: () => number;
}

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartContextProvider) {
  const [products, setProducts] = useState<Product[]>([]);

  function addProductToCart(product: Product) {
    const productAlreadyExists = products.find((state) => state.id === product.id);

    if (productAlreadyExists) {
      return;
    }

    const data = {
      ...product,
      amount: 1,
    };

    return setProducts((state) => [data, ...state]);
  }

  function removeProduct(id: string) {
    const newProducts = products.filter((product) => product.id !== id);

    return setProducts(newProducts);
  }

  function incrementProduct(id: string) {
    return setProducts((state) => {
      const updatedProducts = state.map((product) =>
        product.id === id ? { ...product, amount: product.amount + 1 } : product,
      );

      return updatedProducts;
    });
  }

  function reduceProduct(id: string) {
    return setProducts((state) => {
      const updatedProducts = state.map((product) =>
        product.id === id && product.amount > 1
          ? { ...product, amount: product.amount - 1 }
          : product,
      );

      return updatedProducts;
    });
  }

  function getProductSummary(id: string) {
    const { amount, price } = products.find((product) => product.id === id);

    const totalPrice = price * amount;

    return {
      amount,
      totalPrice,
    };
  }

  function getTotalCartPrice() {
    return products.reduce((acc, product) => {
      const productAmount = product.amount * product.price;

      return acc + productAmount;
    }, 0);
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        removeProduct,
        incrementProduct,
        reduceProduct,
        getProductSummary,
        getTotalCartPrice,
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
