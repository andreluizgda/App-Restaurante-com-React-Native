// Importa a função forwardRef para encaminhar referências e outros componentes do React Native
import { forwardRef } from "react";
import { TouchableOpacity, TouchableOpacityProps, Image, 
  ImageProps, View, Text, } from "react-native";

// Define o tipo de dados para as propriedades do produto
type ProductDataProps = {
  title: string;
  thumbnail: ImageProps;
  description: string;
  quantity?: number;
};

// Define as propriedades aceitas pelo componente Product, incluindo as de TouchableOpacity
type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps;
};

// Componente Product, usa forwardRef para permitir referências externas ao TouchableOpacity
export const Product = forwardRef<TouchableOpacity, ProductProps>(
  ({ data, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        className="w-full flex-row items-center pb-4"
        {...rest}
      >
        <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />

        <View className="flex-1 ml-3">
          <View className="flex-row items-center">
            <Text className="text-slate-100 text-base flex-1">
              {data.title}
            </Text>

            {data.quantity && (
              <View>
                <Text className="text-slate-400 text-sm">
                  X {data.quantity}
                </Text>
              </View>
            )}
          </View>
          <Text className="text-slate-400 text-xs leading-5 mt-0.5">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);
