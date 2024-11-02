import React from 'react';
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <ToastProvider>
        {/* Coloque o Slot ou outros componentes que precisem de contexto de toast aqui */}
        <Slot />
      </ToastProvider>
    </SafeAreaView>
  );
}
