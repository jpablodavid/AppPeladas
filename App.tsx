import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

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

import { Background } from "./src/components/Background";

import { Group } from "./src/screens/Group";
import { Home } from "./src/screens/Home";
import { SignIn } from "./src/screens/SignIn";
import { SignUp } from "./src/screens/SignUp";
import { CreateAccount } from "./src/screens/CreateAccount";
import { Routes } from "./src/routes";

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_900Black,
		Rajdhani_500Medium,
		Rajdhani_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<Background>
			<StatusBar
				style='light'
				backgroundColor="transparent"
				translucent
			/>
			{/* <Group /> */}
			<Routes/>
		</Background>
	);
}
