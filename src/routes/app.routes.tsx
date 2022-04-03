import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";

import { AcessGroup } from "../screens/AcessGroup";
import { CreateGroup } from "../screens/CreateGroup";
import { Home } from "../screens/Home";
import { JoinGroup } from "../screens/JoinGroup";
import { Profile } from "../screens/Profile";
import { CreateAccount } from "../screens/CreateAccount";
import { useAuth } from "../hooks/auth";

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes = () => {

  const { user } = useAuth()

	return (
		<Navigator
			initialRouteName={user.position ? 'Home' : 'CreateAccount' }
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: theme.colors.background10,
				},
			}}
		>

      <Screen name="Home" component={Home} />

      <Screen name="CreateAccount" component={CreateAccount}/>

			<Screen name="CreateGroup" component={CreateGroup} />

			<Screen name="JoinGroup" component={JoinGroup} />

			<Screen name="AcessGroup" component={AcessGroup} />

			<Screen name="Profile" component={Profile} />

		</Navigator>
	);
};
