import { View, Text, FlatList, SectionList } from "react-native";
import { Header } from "../components/header";
import { CategoryButton } from "../components/category-button";
import { CATEGORIES, MENU, ProductProps } from "../utils/data/products";
import { useRef, useState } from "react";
import { Product } from "../components/product";
import { Link } from "expo-router";
import { useCartStore } from "../stores/cart-store";

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const cartStore = useCartStore();

  const sectionListRef = useRef<SectionList<ProductProps>>(null);
  const cartQuantyItens = cartStore.products.reduce((acc, product) => acc + product.quantity, 0);

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);
    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory);

    if(sectionListRef.current){
      sectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex: 0,
        animated: true,
       })
    }
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faca seu Pedido" cartQuantyNumber={cartQuantyItens} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

      <SectionList
        sections={MENU}
        ref={sectionListRef}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) =><Link href={`/product/${item.id}`} asChild><Product data={item} /></Link>}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-white font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}
