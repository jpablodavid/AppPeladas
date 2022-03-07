import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { CreateAccount } from "../screens/CreateAccount";


const Stack = createStackNavigator();

export const AuthRoutes = () => {
	return (
		<Stack.Navigator
			initialRouteName="SignIn"
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: theme.colors.background10,
				},
			}}
		>
			<Stack.Screen name="SignIn" component={SignIn} />

			<Stack.Screen name="SignUp" component={SignUp} />

			<Stack.Screen name="CreateAccount" component={CreateAccount} />
		</Stack.Navigator>
	);
};
