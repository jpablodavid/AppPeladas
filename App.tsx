import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator } from "react-native";

import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

import { AuthProvider } from "./src/hooks/auth";
import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_900Black,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded ) {
    return <View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator /></View>;
  }

  return (
    <Background>
      <StatusBar style="auto" backgroundColor="transparent" translucent />

      <AuthProvider>
        <Routes />
      </AuthProvider>

    </Background>
  );
}
