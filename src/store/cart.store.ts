import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ProductSummary {
  amount: number;
  totalPrice: number;
}

interface CartStore {
  products: Product[];
  addProductToCart: (product: Product) => void;
  removeProduct: (id: string) => void;
  incrementProduct: (id: string) => void;
  reduceProduct: (id: string) => void;
  getProductSummary: (id: string) => ProductSummary;
  getTotalCartPrice: () => number;
  clearCart: () => void;
  handleProductAmount: (id: string, amount: number) => void;
}

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => {
      function addProductToCart(product: Product) {
        const { products } = get();

        const productAlreadyInCart = products.find((state) => state.id === product.id);

        if (productAlreadyInCart) {
          return;
        }

        const data = {
          ...product,
          amount: 1,
        };

        const newProducts = [data, ...products];

        return set(() => ({ products: newProducts }));
      }

      function removeProduct(id: string) {
        const { products } = get();

        const newProducts = products.filter((product) => product.id !== id);

        return set(() => ({ products: newProducts }));
      }

      function incrementProduct(id: string) {
        const { products } = get();

        const updatedProducts = products.map((product) => {
          const newProductaData = { ...product, amount: product.amount + 1 };

          return product.id === id ? newProductaData : product;
        });

        return set(() => ({ products: updatedProducts }));
      }

      function reduceProduct(id: string) {
        const { products } = get();

        const updatedProducts = products.map((product) => {
          const newProductData = { ...product, amount: product.amount - 1 };

          return product.id === id && product.amount > 1 ? newProductData : product;
        });

        return set(() => ({ products: updatedProducts }));
      }

      function getTotalCartPrice() {
        const { products } = get();

        const amount = products.reduce((acc, product) => {
          const productAmount = product.amount * product.price;

          return acc + productAmount;
        }, 0);

        return amount;
      }

      function getProductSummary(id: string) {
        const { products } = get();

        const { amount, price } = products.find((product) => product.id === id);

        const totalPrice = price * amount;

        return {
          amount,
          totalPrice,
        };
      }

      function clearCart() {
        return set(() => ({ products: [] }));
      }

      function handleProductAmount(id: string, amount: number) {
        const { products } = get();

        const newProducts = products.map((product) => {
          if (product.id === id) {
            const newProduct = { ...product, amount };

            return newProduct;
          }

          return product;
        });

        return set(() => ({ products: newProducts }));
      }

      return {
        products: [],
        addProductToCart,
        removeProduct,
        incrementProduct,
        reduceProduct,
        getProductSummary,
        getTotalCartPrice,
        clearCart,
        handleProductAmount,
      };
    },
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
