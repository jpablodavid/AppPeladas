import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

import { View } from 'react-native';

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

import { AcessGroup } from "./src/screens/AcessGroup";
import { Home } from "./src/screens/Home";
import { SignIn } from "./src/screens/SignIn";
import { SignUp } from "./src/screens/SignUp";
import { CreateAccount } from "./src/screens/CreateAccount";
import { Routes } from "./src/routes";
import { Avatar } from "./src/components/Avatar";
import { categoriesGroup } from "./src/utils/categoriesGroup";
import { AccountGroup } from "./src/screens/AccountGroup";
import { Input } from "./src/components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "./src/global/styles/theme";
import { CreateGroup } from "./src/screens/CreateGroup";

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
			<StatusBar style="light" backgroundColor="transparent" translucent />
			{/* <AcessGroup title={"Nome do grupo"} /> */}
			{/* <Home position='Zagueiro' camisa='6' /> */}

			{/* <AccountGroup title={"Contabilidade"} /> */}
			{/* <Routes/> */}
			<CreateGroup />
		</Background>
	);
}
