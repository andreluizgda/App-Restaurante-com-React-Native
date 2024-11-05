// Importa o componente TextInput e suas propriedades do React Native
import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

// Função para mexer no Input do Carrinho de pedidos. Aqui definimos cor, borda, etc
export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      multiline
      textAlignVertical="top"
      placeholderTextColor={colors.slate[400]}
      className="h-32 text-white bg-neutral-700 rounded-md border border-neutral-200 px-4 py-3"
      {...rest}
    />
  );
}
