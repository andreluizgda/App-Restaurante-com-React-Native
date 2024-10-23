import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useToast } from "react-native-toast-notifications";
import { Button } from "../components/button";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { LinkButton } from "../components/link-button";
import { Product } from "../components/product";
import { ProductCartProps, useCartStore } from "../stores/cart-store";
import { formatCurrency } from "../utils/functions/format-currency";

//Coloque o número do restaurante no Const PHONE_NUMBER PARA O APP FUNCIONAR!! OBS:DEVE CONTER O DDI(Brasil, +55) E O DDD.

export default function Cart() {
  const [address, setAddress] = useState("");
  const PHONE_NUMBER = "0000000000000";
  const cartStore = useCartStore();
  const navigation = useNavigation();
  const toast = useToast();
  const total = formatCurrency(
    cartStore.products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    )
  );
  function handleProductRemove(product: ProductCartProps) {
    Alert.alert("Remover", `${product.title} do carrinho?`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        onPress: () => cartStore.remove(product.id),
      },
    ]);
  }

  function handleOrder() {
    if (address.trim().length === 0) {
      return Alert.alert("Endereço", "Informe o endereço de entrega !");
    }
    const products = cartStore.products
      .map((product) => `\n ${product.quantity} ${product.title}`)
      .join("");

    const message = `
     NOVO PEDIDO
     \n Entregar em : ${address}
    ${products} 
    \n Valor Total : ${total}`;

    toast.show("Pedido enviado com sucesso !", {
      type: "success",
      duration: 900,
      placement: "bottom",
      animationType: "slide-in",
    });

    Linking.openURL(
      `http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`
    );

    cartStore.clear();
    navigation.goBack();
  }
  function handleRemoveAllProductsInCart() {
    if(cartStore.products.length === 0){
      Alert.alert("Carrinho vazio", "Seu carrinho já está vazio.");
      return;
    }
    Alert.alert(
      "Remover todos os produtos",
      "Deseja remover todos os produtos do carrinho?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Remover",
          onPress: () => cartStore.clear(),
        },
      ]
    );
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Carrinho" />

      <KeyboardAwareScrollView>
        <ScrollView>
          {cartStore.products.length > 0 ? (
            <View className="p-5 flex-1">
              {cartStore.products.map((product) => (
                <Product
                  key={product.id}
                  data={product}
                  onPress={() => handleProductRemove(product)}
                />
              ))}
            </View>
          ) : (
            <View className="items-center m-8">
              <Feather name="x-circle" size={36} color="white"/>
              <Text className="font-body text-center text-slate-400 mt-2">
                Seu carrinho está vazio.
              </Text>
            </View>
          )}
          <View className="flex-row gap-2  justify-between m-3">
            <View className="flex-row items-center">
              <Text className="text-white text-xl font-subtitle">Total : </Text>
              <Text className="text-lime-400 text-2xl font-heading">
                {total}
              </Text>
            </View>
            <TouchableOpacity onPress={handleRemoveAllProductsInCart}>
              <Feather name="trash-2" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <Input
            placeholder="Informe o endereco de entrega"
            blurOnSubmit
            onChangeText={setAddress}
            onSubmitEditing={handleOrder}
            returnKeyType="next"
          />
        </ScrollView>
      </KeyboardAwareScrollView>
      <View className="gap-5 p-5">
        <Button onPress={handleOrder}>
          <Button.Text>Finalizar Pedido</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>
        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
      </View>
  );
}
