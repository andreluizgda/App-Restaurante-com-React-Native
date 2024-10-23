import { forwardRef } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  View,
  Text,
} from "react-native";

type ProductDataProps = {
  title: string;
  thumbnail: ImageProps;
  description: string;
  quantity?: number;
};

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps;
};

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
            <Text className="text-slate-100 font-subtitle text-base flex-1">
              {data.title}
            </Text>

            {data.quantity && (
              <View>
                <Text className="text-slate-400 font-subtitle text-sm">
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
