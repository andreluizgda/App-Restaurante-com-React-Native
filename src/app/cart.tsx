// Importa a biblioteca
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Alert, Linking, ScrollView, Text, TouchableOpacity, View,
  Modal,TextInput,} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useToast } from "react-native-toast-notifications";
import { Button } from "../components/button";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { LinkButton } from "../components/link-button";
import { Product } from "../components/product";
import { ProductCartProps, useCartStore } from "../stores/cart-store";
import { formatCurrency } from "../utils/functions/format-currency";

// Função principal do componente Cart
export default function Cart() {
// Declara estados locais para armazenar o endereço, pedido de alteração e status do modal
  const [address, setAddress] = useState("");
  const [changeRequest, setChangeRequest] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // Define o número de telefone do restaurante para envio do pedido
  const PHONE_NUMBER = "0000000000000"; 
  //Coloque o número do restaurante no Const PHONE_NUMBER PARA O APP FUNCIONAR!! 
  //OBS:DEVE CONTER O DDI(Brasil, +55) E O DDD.
  
  const cartStore = useCartStore();
  const navigation = useNavigation();
  const toast = useToast();

// Calcula o valor total do pedido somando preço e quantidade dos itens no carrinho
  const total = formatCurrency(
    cartStore.products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    )
  );

// Função para remover um produto específico do carrinho
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

// Função para finalizar o pedido, abrindo alerta para confirmação e opção de alterações
  function handleOrder() {
    if (address.trim().length === 0) {
      return Alert.alert("Endereço", "Informe o endereço de entrega!");
    }

    Alert.alert(
      "Deseja fazer alterações no pedido?",
      "",
      [
        {
          text: "Sim",
          onPress: () => setModalVisible(true), // Exibe modal para alteração do pedido
        },
        {
          text: "Não",
          onPress: () => {
            sendOrder("Sem alteração"); // Envia o pedido sem alterações
          },
        },
      ],
      { cancelable: false }
    );
  }

// Função que envia o pedido para o WhatsApp com as informações do cliente
  function sendOrder(changeMessage = "") {
    const products = cartStore.products
      .map((product) => `\n ${product.quantity} ${product.title}`)
      .join("");

    const message = `
     NOVO PEDIDO
     \n Entregar em : ${address}
    ${products} 
    \n Valor Total : ${total}
    ${changeRequest ? `\n Alterações: ${changeRequest}` : changeMessage}`;

    toast.show("Pedido enviado com sucesso!", {
      type: "success",
      duration: 900,
      placement: "bottom",
      animationType: "slide-in",
    });
    // Abre o WhatsApp com a mensagem formatada e limpa o carrinho após o envio
    Linking.openURL(
      `http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`
    );

    cartStore.clear();
    navigation.goBack();
  }

// Função para remover todos os produtos do carrinho, com alerta de confirmação
  function handleRemoveAllProductsInCart() {
    if (cartStore.products.length === 0) {
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
              <Feather name="x-circle" size={36} color="white" />
              <Text style={{ color: 'slategray', textAlign: 'center', marginTop: 8 }}>
                Seu carrinho está vazio.
              </Text>
            </View>
          )}
          <View className="flex-row gap-2 justify-between m-3">
            <View className="flex-row items-center">
              <Text style={{ color: 'white', fontSize: 20 }}>Total:</Text>
              <Text style={{ color: 'lime', fontSize: 24 }}>
                {total}
              </Text>
            </View>
            <TouchableOpacity onPress={handleRemoveAllProductsInCart}>
              <Feather name="trash-2" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <Input
            placeholder="Informe o endereço de entrega"
            blurOnSubmit
            onChangeText={setAddress}
            onSubmitEditing={handleOrder}
            returnKeyType="next"
          />
        </ScrollView>
      </KeyboardAwareScrollView>
      <View className="gap-5 p-5">
        <Button onPress={handleOrder} style={{ padding: 12, borderRadius: 8 }}>
          <Button.Text style={{ fontSize: 18 }}>Finalizar Pedido</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={24} />
          </Button.Icon>
        </Button>
        <LinkButton title="Voltar ao cardápio" href="/" style={{ padding: 12, borderRadius: 8 }} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white rounded-lg p-5 w-80">
            <Text style={{ marginBottom: 15 }}>O que deseja alterar no pedido?</Text>
            <TextInput
              placeholder="Digite sua alteração aqui"
              value={changeRequest}
              onChangeText={setChangeRequest}
              style={{ borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 15 }}
            />
            <Button onPress={() => {
              sendOrder();
              setModalVisible(false);
              setChangeRequest("");
            }}>
              <Button.Text>Enviar Alteração</Button.Text>
            </Button>
            <Button onPress={() => {
              setModalVisible(false);
            }}>
              <Button.Text>Cancelar</Button.Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}
