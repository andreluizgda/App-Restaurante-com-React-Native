// Importa a biblioteca
import React from 'react';
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";

export default function Layout() {
  return (
    <SafeAreaView className= "flex-1 bg-amber-950">
      <ToastProvider>
        {/* Coloque o Slot ou outros componentes que precisem de contexto de toast aqui */}
        <Slot />
      </ToastProvider>
    </SafeAreaView>
  );
}
