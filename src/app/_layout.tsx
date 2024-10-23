import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-amber-950">
      <ToastProvider>
        <Slot />
      </ToastProvider>
    </SafeAreaView>
  );
}
