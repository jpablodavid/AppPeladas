import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { CreateAccount } from "../screens/CreateAccount";
import { Home } from "../screens/Home";


const Stack = createStackNavigator();

export const AuthRoutes = () => {
	return (
		<Stack.Navigator
			initialRouteName="SignIn"
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: "transparent",
				},
			}}
		>
			<Stack.Screen name="SignIn" component={SignIn} />
			<Stack.Screen name="SignUp" component={SignUp} />
			<Stack.Screen name="CreateAccount" component={CreateAccount} />
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	);
};
