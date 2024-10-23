import { ProductProps } from "../../utils/data/products";
import { ProductCartProps } from "../cart-store";

export function add(products: ProductCartProps[], newProduct: ProductProps) {
  const existingProduct = products.find(({ id }) => newProduct.id === id); // busca o produto no carrinho
  //  se o produto já existe no carrinho, aumenta a quantidade
  if (existingProduct) {
    return products.map((product) =>
      product.id === existingProduct.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }
  return [...products, { ...newProduct, quantity: 1 }]; // se não existe, adiciona o produto com quantidade 1
}
export function remove(products: ProductCartProps[], productRemoveId: string) {
  const updateProducts = products.map((product) =>
    product.id === productRemoveId
      ? {
          ...product,
          quantity: product.quantity > 1 ? product.quantity - 1 : 0,
        }
      : product
  );
  return updateProducts.filter((product) => product.quantity > 0); // remove o produto do carrinho se a quantidade for 0
}
