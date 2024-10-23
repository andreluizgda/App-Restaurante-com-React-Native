import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ProductProps } from "../utils/data/products";
import * as cartInMemory from "./helpers/cart-in-memory";
import AsyncStorage from "@react-native-async-storage/async-storage";
export type ProductCartProps = ProductProps & {
  quantity: number;
};

type StateProps = {
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
  remove: (productId: string) => void;
  clear: () => void;
};

export const useCartStore = create(
  persist<StateProps>(
    (set) => ({
      products: [],

      add: (product: ProductProps) =>
        set((state) => ({
          products: cartInMemory.add(state.products, product),
        })), // adiciona o produto no carrinho

      remove: (productId: string) =>
        set((state) => ({
          products: cartInMemory.remove(state.products, productId),
        })),
      clear: () => set(() => ({ products: [] })),
    }),
    {
      name: "gdelivery:cart",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
