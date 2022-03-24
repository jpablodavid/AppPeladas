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

import { Routes } from "./src/routes";

import { AuthProvider } from "./src/hooks/auth";
import { Profile } from "./src/screens/Profile";

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
		<>
			<StatusBar style="auto" backgroundColor="transparent" translucent />
			{/* <AcessGroup title={"Nome do grupo"} /> */}
			{/* <AccountGroup title={"Contabilidade"} /> */}
			<AuthProvider>
				<Routes />
			</AuthProvider>
			{/* <Profile/> */}
			{/* <Home position="zagueiro" camisa={'10'}/> */}
			{/* <CreateGroup /> */}
			{/* <ListStaff /> */}
			{/* <ListAthletes/> */}
			{/* <ListInfo data={info}/> */}
			{/* <Home position={"Zagueiro"} camisa={"10"} /> */}
		</>
	);
}
