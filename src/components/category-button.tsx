import { Pressable, PressableProps, Text } from "react-native";
import clsx from "clsx";

type CategoryButtonProps = PressableProps & {
  title: string
  isSelected?: boolean
}

//Aqui definimos características do botão de categoria localizado na tela inicial, a tela do: Faca seu pedido
export function CategoryButton({title, isSelected , ...rest}: CategoryButtonProps){
  return (
    <Pressable className={clsx("bg-slate-800 px-4 justify-center rounded-md h-10", isSelected && "border-2 border-neutral-200")} {...rest}>
        <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  )
}