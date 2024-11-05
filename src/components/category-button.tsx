// Importa os componentes Pressable e Text do React Native e a biblioteca clsx
import { Pressable, PressableProps, Text } from "react-native";
import clsx from "clsx";

type CategoryButtonProps = PressableProps & {
  title: string // Título do botão
  isSelected?: boolean
}

// Aqui definimos características do botão de categoria localizado na tela inicial, a tela do: Faça seu pedido
export function CategoryButton({ title, isSelected, ...rest }: CategoryButtonProps) {
  return (
    <Pressable className={clsx("bg-slate-800 px-4 justify-center rounded-md h-10", isSelected && "border-2 border-neutral-200")} {...rest}>
      <Text className="text-slate-100 text-sm">{title}</Text>
    </Pressable>
  )
}
