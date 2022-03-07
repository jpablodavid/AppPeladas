import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";

import { AcessGroup } from "../screens/AcessGroup";
import { CreateGroup } from "../screens/CreateGroup";
import { Home } from "../screens/Home";
import { JoinGroup } from "../screens/JoinGroup";
import { Profile } from "../screens/Profile";

const Stack = createStackNavigator();

export const AppRoutes = () => {
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
			<Stack.Screen name="Home" component={Home} />

			<Stack.Screen name="CreateGroup" component={CreateGroup} />

			<Stack.Screen name="JoinGroup" component={JoinGroup} />

			<Stack.Screen name="AcessGroup" component={AcessGroup} />

			<Stack.Screen name="Profile" component={Profile} />

		</Stack.Navigator>
	);
};
