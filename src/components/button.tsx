// Importa componentes do React Native
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
}
type ButtonTextProps = {
  children: React.ReactNode;
}
type ButtonIconProps = {
  children: React.ReactNode;
}


// Função principal de botão
function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity className="h-12 bg-neutral-200 rounded-md items-center justify-center flex-row" {...rest} activeOpacity={0.8}>
      {children}
    </TouchableOpacity>
  )
}

// Função de texto do botão
function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text className="text-black mx-2 text-base">{children}</Text>
  )
}
// Função de ícone do botão
function ButtonIcon({ children }: ButtonIconProps) {
  return children
}


Button.Text = ButtonText
Button.Icon = ButtonIcon

// Exporta o componente Button com suas subpropriedades
export { Button }
