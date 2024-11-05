// Importa as funções necessárias e módulos externos
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ProductProps } from "../utils/data/products";
import * as cartInMemory from "./helpers/cart-in-memory";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define o tipo dos produtos no carrinho, incluindo a quantidade
export type ProductCartProps = ProductProps & {
  quantity: number;
};

// Define o tipo do estado da loja do carrinho
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

      // Função para adicionar produto ao carrinho
      add: (product: ProductProps) =>
        set((state) => ({
          products: cartInMemory.add(state.products, product),
        })), // adiciona o produto no carrinho

      // Função para remover produto do carrinho
      remove: (productId: string) =>
        set((state) => ({
          products: cartInMemory.remove(state.products, productId),
        })),
      
      // Função para limpar o carrinho (esvaziar a lista de produtos
      clear: () => set(() => ({ products: [] })),
    }),
    {
      name: "gdelivery:cart",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
