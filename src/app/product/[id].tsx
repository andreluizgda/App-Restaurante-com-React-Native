import { Feather } from "@expo/vector-icons";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { Image, Text, View, ScrollView } from "react-native";
import { useToast } from "react-native-toast-notifications";
import { Button } from "../../components/button";
import { LinkButton } from "../../components/link-button";
import { useCartStore } from "../../stores/cart-store";
import { PRODUCTS } from "../../utils/data/products";
import { formatCurrency } from "../../utils/functions/format-currency";

export default function Product() {
  const cartStore = useCartStore();
  const navigation = useNavigation();
  const toast = useToast();
  
  const { id } = useLocalSearchParams();
  const product = PRODUCTS.find((item) => item.id === id);

  function handleAddToCart() {
    if (product) {
      const productToAdd = { ...product, quantity: 1 }; // Adiciona a quantidade fixa ao produto
      cartStore.add(productToAdd); // Adiciona ao carrinho
      toast.show("Produto Adicionado!", {
        type: "success",
        duration: 900,
        placement: "bottom",
        animationType: "zoom-in",
      });
      navigation.goBack();
    }
  }
  
  if (!product) return <Redirect href="/" />;

  return (
    <ScrollView className="flex-1">
      <Image source={product.cover} className="w-full h-52" resizeMode="cover" />
      <View className="p-5 mt-8 flex-1">
        <Text className="text-white text-xl">{product.title}</Text>
        <Text className="text-lime-400 text-2xl my-2">
          {formatCurrency(product.price)}
        </Text>
        <Text className="text-slate-400 text-base leading-6 mb-6">
          {product.description}
        </Text>
        {product.ingredients.map((ingredient, index) => (
          <Text key={index} className="text-slate-400 leading-6 text-base">
            {"\u2022"} {ingredient}
          </Text>
        ))}
      </View>

      <View className="p-5 gap-5 pb-8 flex items-center">
        <Button onPress={handleAddToCart} className="w-full">
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          <Button.Text>Adicionar ao carrinho</Button.Text>
        </Button>
      </View>

      <LinkButton title="Voltar ao cardápio" href="/" />
    </ScrollView>
  );
}
