// Importa a biblioteca
import { View, Text, FlatList, SectionList } from "react-native";
import { Header } from "../components/header";
import { CategoryButton } from "../components/category-button";
import { CATEGORIES, MENU, ProductProps } from "../utils/data/products";
import { useRef, useState } from "react";
import { Product } from "../components/product";
import { Link } from "expo-router";
import { useCartStore } from "../stores/cart-store";

//Função principal
export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const cartStore = useCartStore();
  
  // Contagem total de itens no carrinho
  const cartQuantyItens = cartStore.products.reduce((acc, product) => acc + product.quantity, 0);
  
  // Referência para a SectionList
  const sectionListRef = useRef<SectionList<ProductProps>>(null);

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);
    
    // Encontra o índice da seção correspondente à categoria selecionada
    const sectionIndex = CATEGORIES.findIndex((cat) => cat === selectedCategory);
    
    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex: 0, // Volta para o primeiro item da seção
        animated: true,
      });
    }
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu Pedido" cartQuantyNumber={cartQuantyItens} />

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
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ color: 'white', marginTop: 8, marginBottom: 3 }}>
            {title}
          </Text>
        )}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }} // Espaço no fundo da lista
      />
    </View>
  );
}
