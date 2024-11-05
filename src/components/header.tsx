// Importa os componentes e bibliotecas necessários do React Native e Expo Router
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Link } from "expo-router";

type HeaderProps = {
  title: string;
  cartQuantyNumber?: number;
};


//Abaixo,definimos como o Header seria. Está incluso no header a logo do estabelecimento e o ícone do carrinho

export function Header({ title, cartQuantyNumber = 0 }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image source={require("../assets/logo.png")} className="w-24 h-12 mt-6" />
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>
      {cartQuantyNumber > 0 && (
        <Link href="/cart" asChild>
          <TouchableOpacity>
            <View className="bg-neutral-200 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
              <Text className="text-slate-900 font-bold text-xs">
                {cartQuantyNumber}
              </Text>
            </View>
            <Feather name="shopping-bag" size={24} color={colors.white} />
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
}
